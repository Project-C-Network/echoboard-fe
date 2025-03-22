import { useState } from 'react';
import Image from 'next/image'; // Import the Image component

// Define the type for a single comment
type Comment = {
  id: string; // Unique ID for the comment
  avatar: string; // Avatar URL
  name: string; // User name
  message: string; // Comment message
  timestamp: string; // Timestamp
  likes: number; // Number of likes
  dislikes: number; // Number of dislikes
  replies?: Comment[]; // Nested comments (replies)
};

const ChatInterface = () => {
  // Sample question and comments data (can be fetched from an API or state)
  const [question, setQuestion] = useState({
    id: 'question-1',
    avatar: 'https://i.pravatar.cc/150?img=6', // Add avatar URL
    name: 'User 2', // Add questioner's name
    message: 'What is the best morning diet?',
    timestamp: '5 hrs ago',
    likes: 12, // Add number of likes
    dislikes: 2, // Add number of dislikes
  });

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'comment-1',
      avatar: 'https://i.pravatar.cc/150?img=1',
      name: 'User 1',
      message: 'I recommend a balanced diet with fruits and nuts.',
      timestamp: '4 hrs ago',
      likes: 12,
      dislikes: 2,
      replies: [
        {
          id: 'reply-1',
          avatar: 'https://i.pravatar.cc/150?img=2',
          name: 'User 2',
          message: 'I agree! Fruits are essential for vitamins.',
          timestamp: '3 hrs ago',
          likes: 0,
          dislikes: 0,
        },
        {
          id: 'reply-2',
          avatar: 'https://i.pravatar.cc/150?img=3',
          name: 'User 3',
          message: 'What about protein sources?',
          timestamp: '2 hrs ago',
          likes: 0,
          dislikes: 0,
        },
      ],
    },
    {
      id: 'comment-2',
      avatar: 'https://i.pravatar.cc/150?img=4',
      name: 'User 4',
      message: 'A high-protein breakfast is the best!',
      timestamp: '1 hr ago',
      likes: 8,
      dislikes: 1,
      replies: [
        {
          id: 'reply-3',
          avatar: 'https://i.pravatar.cc/150?img=5',
          name: 'User 5',
          message: 'Eggs are a great source of protein.',
          timestamp: '30 mins ago',
          likes: 0,
          dislikes: 0,
        },
      ],
    },
  ]);

  // State to track expanded/collapsed state for each comment
  const [expandedStates, setExpandedStates] = useState<{ [key: string]: boolean }>({});

  // Function to toggle expand/collapse for a specific comment
  const toggleExpand = (commentId: string) => {
    setExpandedStates((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div className='bg-EBLight shadow-md p-4'>
      <div className='space-y-4'>
        {/* Question (always aligned to the left) */}
        <div className='flex justify-start'>
          <div className='bg-EBPrimary-100 border-2 border-EBMaroon p-3 rounded-lg max-w-lg'>
            {/* Avatar and Question */}
            <div className='flex items-start space-x-2'>
              {/* Avatar */}
              <div className='w-8 h-8 rounded-full overflow-hidden'>
                <Image
                  src={question.avatar}
                  alt='Avatar'
                  width={32}
                  height={32}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Question and Timestamp */}
              <div className='flex-1'>
                <p className='text-EBLight font-semibold'>{question.name}</p>
                <p className='text-EBLight'>{question.message}</p>
              </div>
            </div>

            {/* Like/Dislike Buttons and Timestamp */}
            <div className='flex justify-between items-center mt-2 pl-10'>
              {/* Like/Dislike Buttons */}
              <div className='flex items-center space-x-4'>
                {/* Like Button */}
                <button className='text-EBSuccess-100 transition-colors duration-200 flex items-center'>
                  <i className='ri-thumb-up-line'></i>
                  <span className='ml-1 text-sm'>{question.likes}</span>
                </button>

                {/* Dislike Button */}
                <button className='text-EBDanger transition-colors duration-200 flex items-center'>
                  <i className='ri-thumb-down-line'></i>
                  <span className='ml-1 text-sm'>{question.dislikes}</span>
                </button>

                {/* Comments Button */}
                <button className='text-EBOliveGreen transition-colors duration-200 flex items-center'>
                  <i className='ri-chat-3-line'></i>
                  <span className='ml-1 text-sm'>{question.dislikes}</span>
                </button>

              </div>

              {/* Timestamp */}
              <p className='text-EBLight text-sm'>{question.timestamp}</p>
            </div>
          </div>
        </div>

        {/* Map through the comments to render them dynamically */}
        {comments.map((comment) => (
          <div key={comment.id} className='flex justify-end'>
            <div className='bg-EBPrimary-100/50 border-2 border-EBSecondary p-3 rounded-lg max-w-lg w-full'>
              {/* Main comment with avatar, name, and message */}
              <div className='flex items-start space-x-2'>
                {/* Avatar */}
                <div className='w-8 h-8 rounded-full overflow-hidden'>
                  <Image
                    src={comment.avatar}
                    alt='Avatar'
                    width={32}
                    height={32}
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* Name and message */}
                <div className='flex-1'>
                  <p className='text-EBLight font-semibold'>{comment.name}</p>
                  <p className='text-EBLight'>{comment.message}</p>
                </div>
              </div>

              {/* Like/Dislike buttons, timestamp, and view more/less */}
              <div className='flex justify-between items-center mt-2 pl-10'>
                {/* Added pl-10 to align with name and comment */}
                {/* Like/Dislike buttons and timestamp */}
                <div className='flex items-center space-x-4'>
                  <button className='text-EBSuccess-100 flex items-center'>
                    <i className='ri-thumb-up-line'></i>
                    <span className='ml-1 text-sm'>{comment.likes}</span>
                  </button>
                  <button className='text-EBDanger flex items-center'>
                    <i className='ri-thumb-down-line'></i>
                    <span className='ml-1 text-sm'>{comment.dislikes}</span>
                  </button>
                  <button className='text-EBOliveGreen flex items-center'>
                    <i className='ri-chat-3-line'></i>
                    <span className='ml-1 text-sm'>{comment.dislikes}</span>
                  </button>
                </div>
                <p className='text-EBSecondary text-sm'>{comment.timestamp}</p>
              </div>

              {/* Nested Comments (replies) */}
              {expandedStates[comment.id] && (
                <div className='mt-2 space-y-2 pl-10'>
                  {' '}
                  {/* Added pl-10 for indentation */}
                  {comment.replies?.map((reply) => (
                    <div key={reply.id} className='flex items-start space-x-2'>
                      {/* Avatar */}
                      <div className='w-6 h-6 rounded-full overflow-hidden'>
                        <Image
                          src={reply.avatar}
                          alt='Avatar'
                          width={24}
                          height={24}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      {/* Message and timestamp */}
                      <div className='flex-1'>
                        <p className='text-EBLight text-sm'>{reply.message}</p>
                        <p className='text-EBSecondary text-xs mt-1'>{reply.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* View more/less button */}
              {comment.replies && comment.replies.length > 0 && (
                <div className='flex justify-center'>
                  <button
                    className='text-EBSecondary hover:text-EBSecondary/75 text-sm flex items-center justify-end mt-2'
                    onClick={() => toggleExpand(comment.id)}
                  >
                    <i
                      className={`ri-arrow-${expandedStates[comment.id] ? 'up' : 'down'}-s-line text-xl`} // Increased icon size
                    ></i>
                    <span className='ml-1'>
                      {expandedStates[comment.id] ? 'View less' : 'View more'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;
