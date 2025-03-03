'use client';
import React, { useMemo } from 'react';

// Define types (unchanged)
interface ListItem {
  id: number;
  question: string;
  time: string;
  likes: number;
  comments: number;
  views: number;
}

interface CommentItem {
  id: number;
  user: string;
  avatar: string;
  message: string;
  time: string;
  likes: number;
  comments: number;
}

interface UserAvatarProps {
  size?: string;
  className?: string;
}

interface CommentProps {
  comment: CommentItem;
}

interface QuestionCardProps {
  list: ListItem;
}

// Reusable components (unchanged)
const StarRating: React.FC = () => (
  <div className='flex items-center justify-center gap-2 my-2'>
    {Array.from({ length: 5 }, (_, index) => (
      <i key={index} className='ri-star-fill text-[25px] text-EBAmber' />
    ))}
  </div>
);

const UserAvatar: React.FC<UserAvatarProps> = ({ size = '30px', className = '' }) => (
  <div
    className={`h-[${size}] w-[${size}] rounded-full bg-EBPrimary-100 flex items-center justify-center ${className}`}
  >
    <i className='ri-user-fill text-EBLight text-20' />
  </div>
);

const Comment: React.FC<CommentProps> = React.memo(({ comment }) => (
  <div className='p-[20px] border-[2px] border-EBMaroon rounded-[20px] flex bg-EBPrimary-100 mb-4 gap-2'>
    <UserAvatar size='30px' className='bg-EBLight' />
    <div className='w-full'>
      <h4 className='mb-2'>{comment.message}</h4>
      <div className='flex items-center justify-between'>
        <h6 className='text-EBSecondary'>{comment.time} hrs ago</h6>
        <i className='ri-arrow-down-s-line text-EBSecondary text-[25px] cursor-pointer' />
      </div>
    </div>
  </div>
));

Comment.displayName = 'Comment';

const QuestionCard: React.FC<QuestionCardProps> = React.memo(({ list }) => (
  <div className='px-[10px] py-[15px] border-2 border-EBMaroon mb-4 rounded-[12px] flex gap-2 bg-EBLight'>
    <UserAvatar size='25px' />
    <div className='w-full'>
      <div className='flex items-center gap-2 mb-2 text-EBPrimary-100'>
        <h4>{list.question}</h4>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='flex gap-1'>
            <i className='ri-thumb-up-fill text-EBPrimary-200 text-20 cursor-pointer' />
            <span className='text-EBSecondary'>{list.likes}</span>
          </div>
          <div className='flex gap-1'>
            <i className='ri-thumb-down-fill text-EBPrimary-200 text-20 cursor-pointer' />
            <span className='text-EBSecondary'>{list.comments}</span>
          </div>
          <div className='flex gap-1'>
            <i className='ri-chat-1-fill text-EBPrimary-200 text-20' />
            <span className='text-EBSecondary'>{list.views}</span>
          </div>
        </div>
        <p className='text-EBPrimary-100'>{list.time} hrs ago</p>
      </div>
    </div>
  </div>
));

QuestionCard.displayName = 'QuestionCard';

const LiveBlogPage: React.FC = () => {
  const allLists = useMemo<ListItem[]>(
    () => [
      {
        id: 1,
        question: 'What is the best morning diet?',
        time: '4',
        likes: 12,
        comments: 5,
        views: 40,
      },
      {
        id: 2,
        question: "How to read people's mind?",
        time: '5',
        likes: 8,
        comments: 3,
        views: 30,
      },
      {
        id: 3,
        question: 'Why do I feel lonely?',
        time: '6',
        likes: 10,
        comments: 7,
        views: 35,
      },
      {
        id: 4,
        question: 'What is good for life?',
        time: '7',
        likes: 15,
        comments: 6,
        views: 50,
      },
      {
        id: 5,
        question: 'What is my goal?',
        time: '12',
        likes: 5,
        comments: 2,
        views: 20,
      },
      {
        id: 6,
        question: 'How to stay motivated every day?',
        time: '3',
        likes: 9,
        comments: 4,
        views: 25,
      },
      {
        id: 7,
        question: 'What are the benefits of meditation?',
        time: '8',
        likes: 14,
        comments: 8,
        views: 60,
      },
      {
        id: 8,
        question: 'How to improve productivity at work?',
        time: '9',
        likes: 11,
        comments: 5,
        views: 45,
      },
      {
        id: 9,
        question: 'What are the best habits for success?',
        time: '10',
        likes: 13,
        comments: 6,
        views: 55,
      },
      {
        id: 10,
        question: 'How to build strong relationships?',
        time: '11',
        likes: 7,
        comments: 3,
        views: 35,
      },
    ],
    [],
  );

  const comments = useMemo<CommentItem[]>(
    () => [
      {
        id: 1,
        user: 'Alice',
        avatar: 'https://example.com/avatar1.png',
        message: 'A good morning diet should include protein, fiber, and healthy fats.',
        time: '2',
        likes: 6,
        comments: 2,
      },
      {
        id: 2,
        user: 'Bob',
        avatar: 'https://example.com/avatar2.png',
        message: 'Try eating eggs, oatmeal, and a fruit smoothie. It keeps energy levels stable!',
        time: '2',
        likes: 9,
        comments: 4,
      },
      {
        id: 3,
        user: 'Charlie',
        avatar: 'https://example.com/avatar3.png',
        message: 'Avoid sugar-heavy breakfasts. Focus on whole grains and proteins!',
        time: '2',
        likes: 7,
        comments: 3,
      },
      {
        id: 4,
        user: 'David',
        avatar: 'https://example.com/avatar4.png',
        message: 'Drinking warm lemon water in the morning helps detoxify the body.',
        time: '3',
        likes: 5,
        comments: 1,
      },
      {
        id: 5,
        user: 'Eva',
        avatar: 'https://example.com/avatar5.png',
        message: 'Including nuts and seeds in your breakfast provides essential nutrients.',
        time: '4',
        likes: 8,
        comments: 2,
      },
      {
        id: 6,
        user: 'Frank',
        avatar: 'https://example.com/avatar6.png',
        message: 'A balanced breakfast helps improve focus and productivity throughout the day.',
        time: '5',
        likes: 10,
        comments: 5,
      },
      {
        id: 7,
        user: 'Grace',
        avatar: 'https://example.com/avatar7.png',
        message: 'Skipping breakfast can lead to overeating later in the day.',
        time: '6',
        likes: 4,
        comments: 1,
      },
      {
        id: 8,
        user: 'Hank',
        avatar: 'https://example.com/avatar8.png',
        message: 'Greek yogurt with fruits is a great option for a quick and healthy breakfast.',
        time: '7',
        likes: 12,
        comments: 6,
      },
      {
        id: 9,
        user: 'Ivy',
        avatar: 'https://example.com/avatar9.png',
        message: 'Whole grain toast with avocado is a delicious and nutritious choice.',
        time: '8',
        likes: 7,
        comments: 3,
      },
      {
        id: 10,
        user: 'Jack',
        avatar: 'https://example.com/avatar10.png',
        message: 'Smoothies are a great way to pack in fruits and veggies in the morning.',
        time: '9',
        likes: 11,
        comments: 4,
      },
    ],
    [],
  );

  return (
    <main className='container-fluid h-screen flex flex-col overflow-hidden'>
      {/* Header Part */}
      <section className='bg-EBPrimary-100 p-4 lg:p-8 text-center'>
        <h4 className='uppercase text-bold'>"Question of the month"</h4>
        <StarRating />
        <h4>What is the best morning diet?</h4>
      </section>
      <div className='shadow-lg'></div>
      {/* Content */}
      <section className='flex-1 flex flex-col lg:flex-row overflow-hidden'>
        {/* Left sidebar */}
        <section className='w-full lg:w-[30%] bg-EBPrimary-100 flex flex-col overflow-hidden'>
          {/* Buttons */}
          <div className='flex items-center justify-center gap-4 p-4'>
            <button className='px-4 lg:px-[50px] py-2 lg:py-[10px] rounded-[30px] font-bold text-EBPrimary-100 bg-EBLight shadow-lg'>
              All
            </button>
            <button className='px-4 lg:px-[50px] py-2 lg:py-[10px] rounded-[30px] font-bold text-EBSecondary bg-EBPrimary-100 shadow-lg border border-EBSecondary'>
              Me
            </button>
          </div>
          {/* Lists */}
          <div className='p-4 lg:p-[25px] overflow-y-auto flex-1 h-[60vh] lg:h-auto'>
            {allLists.map((list) => (
              <QuestionCard key={list.id} list={list} />
            ))}
          </div>
        </section>
        {/* Chat */}
        <section className='w-full lg:w-[50%] bg-EBLight p-4 lg:p-[20px] overflow-y-auto flex-1 hidden lg:block'>
          <div className='p-4 lg:p-[20px] bg-EBPrimary-100 border-[2px] border-EBMaroon flex items-center gap-2 rounded-[20px] mb-4'>
            <UserAvatar size='30px' className='bg-EBLight' />
            <h4>What is best morning diet?</h4>
          </div>
          <div>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </section>
        {/* Right profile */}
        <section className='w-full lg:w-[20%] bg-EBPrimary-100 overflow-y-auto flex-1 h-[40vh] lg:h-auto'>
          <div className='p-4 lg:p-[20px] m-4 lg:m-[20px] rounded-[20px] bg-EBLight text-center'>
            <div className='h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded-[50px] bg-EBPrimary-100 flex items-center justify-center m-auto mb-4'>
              <i className='ri-user-fill text-EBLight text-[40px] lg:text-[50px]' />
            </div>
            <h3 className='text-lg text-EBPrimary-100 underline mb-4'>test@gmail.com</h3>
            <h2 className='text-2xl text-EBPrimary-100 font-bold underline mb-4'>Points</h2>
            <p className='text-3xl text-EBPrimary-100 font-bold'>457</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default LiveBlogPage;
