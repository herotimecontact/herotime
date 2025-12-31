'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

/**
 * Fan Poll Component
 * 
 * Allows fans to vote on "How are you watching the release?"
 * Stores results in Firestore and displays live voting percentages
 * 
 * FIRESTORE DATA STRUCTURE:
 * 
 * Collection: "polls"
 * Document ID: "watching-poll"
 * 
 * Document Structure:
 * {
 *   question: "How are you watching the release?",
 *   options: {
 *     alone: 0,              // Vote count for "Alone"
 *     withFriends: 0,        // Vote count for "With friends"
 *     family: 0,             // Vote count for "Family"
 *     firstDayFirstShow: 0   // Vote count for "First day first show"
 *   },
 *   totalVotes: 0,           // Total number of votes across all options
 *   createdAt: timestamp,    // When poll was created
 *   updatedAt: timestamp     // Last vote timestamp
 * }
 * 
 * Session Storage:
 * - Key: "poll_voted_watching"
 * - Value: true (prevents multiple votes from same browser session)
 */

const POLL_OPTIONS = [
  { id: 'alone', label: 'Alone', emoji: '🎬' },
  { id: 'withFriends', label: 'With friends', emoji: '👥' },
  { id: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦' },
  { id: 'firstDayFirstShow', label: 'First day first show', emoji: '🎟️' }
];

const POLL_DOC_ID = 'watching-poll';
const STORAGE_KEY = 'poll_voted_watching';

export default function FanPoll() {
  const [pollData, setPollData] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);

  useEffect(() => {
    // Check if user has already voted (in this session)
    const voted = sessionStorage.getItem(STORAGE_KEY);
    if (voted) {
      setHasVoted(true);
    }

    // Load poll data
    loadPollData();

    // Set up real-time updates (poll every 5 seconds)
    const interval = setInterval(loadPollData, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadPollData = async () => {
    try {
      const pollRef = doc(db, 'polls', POLL_DOC_ID);
      const pollDoc = await getDoc(pollRef);

      if (pollDoc.exists()) {
        setPollData(pollDoc.data());
      } else {
        // Initialize poll if it doesn't exist
        await initializePoll();
      }
    } catch (err) {
      console.error('Error loading poll:', err);
    } finally {
      setLoading(false);
    }
  };

  const initializePoll = async () => {
    const initialData = {
      question: "How are you watching the release?",
      options: {
        alone: 0,
        withFriends: 0,
        family: 0,
        firstDayFirstShow: 0
      },
      totalVotes: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    try {
      const pollRef = doc(db, 'polls', POLL_DOC_ID);
      await setDoc(pollRef, initialData);
      setPollData(initialData);
    } catch (err) {
      console.error('Error initializing poll:', err);
    }
  };

  const handleVote = async (optionId) => {
    if (hasVoted || voting) return;

    setVoting(true);
    setSelectedOption(optionId);

    try {
      const pollRef = doc(db, 'polls', POLL_DOC_ID);

      // Increment the specific option and total votes
      await updateDoc(pollRef, {
        [`options.${optionId}`]: increment(1),
        totalVotes: increment(1),
        updatedAt: new Date()
      });

      // Mark as voted in session storage
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setHasVoted(true);

      // Reload poll data to show updated results
      await loadPollData();
    } catch (err) {
      console.error('Error voting:', err);
      alert('Failed to submit vote. Please try again.');
      setVoting(false);
      setSelectedOption(null);
    } finally {
      setVoting(false);
    }
  };

  const getPercentage = (optionId) => {
    if (!pollData || pollData.totalVotes === 0) return 0;
    const votes = pollData.options[optionId] || 0;
    return Math.round((votes / pollData.totalVotes) * 100);
  };

  const getVoteCount = (optionId) => {
    if (!pollData) return 0;
    return pollData.options[optionId] || 0;
  };

  if (loading) {
    return (
      <div className="fan-poll-container">
        <div className="poll-loading">
          <div className="loading-spinner"></div>
          <p>Loading poll...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fan-poll-container">
      <div className="poll-header">
        <h3 className="poll-question">
          {pollData?.question || "How are you watching the release?"}
        </h3>
        <div className="poll-stats">
          <span className="total-votes">
            {pollData?.totalVotes || 0} {pollData?.totalVotes === 1 ? 'vote' : 'votes'}
          </span>
        </div>
      </div>

      <div className="poll-options">
        {POLL_OPTIONS.map((option) => {
          const percentage = getPercentage(option.id);
          const voteCount = getVoteCount(option.id);
          const isSelected = selectedOption === option.id;

          return (
            <div
              key={option.id}
              className={`poll-option ${hasVoted ? 'voted' : 'clickable'} ${isSelected ? 'selected' : ''}`}
              onClick={() => !hasVoted && handleVote(option.id)}
            >
              <div className="option-content">
                <span className="option-emoji">{option.emoji}</span>
                <span className="option-label">{option.label}</span>
                {hasVoted && (
                  <span className="option-stats">
                    {percentage}% ({voteCount})
                  </span>
                )}
              </div>

              {hasVoted && (
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {hasVoted && (
        <div className="poll-footer">
          <p className="thank-you-message">✅ Thanks for voting!</p>
        </div>
      )}

      {voting && (
        <div className="poll-voting-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}
