'use client';
import React from 'react';

const LiveBlogPage = () => {
  const allLists = [
    {
      id: 1,
      question: 'What is best morning diet?',
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
  ];

  const comments = [
    {
      id: 1,
      user: 'Alice',
      avatar: 'https://example.com/avatar1.png',
      message: 'A good morning diet should include protein, fiber, and healthy fats.',
      time: '2 hrs ago',
      likes: 6,
      comments: 2,
    },
    {
      id: 2,
      user: 'Bob',
      avatar: 'https://example.com/avatar2.png',
      message: 'Try eating eggs, oatmeal, and a fruit smoothie. It keeps energy levels stable!',
      time: '2 hrs ago',
      likes: 9,
      comments: 4,
    },
    {
      id: 3,
      user: 'Charlie',
      avatar: 'https://example.com/avatar3.png',
      message: 'Avoid sugar-heavy breakfasts. Focus on whole grains and proteins!',
      time: '2 hrs ago',
      likes: 7,
      comments: 3,
    },
  ];

  return (
    <div className='container-fluid'>
      {/* Header Part */}
      <section className='bg-EBPrimary-100 p-8 text-center'>
        <h4 className='uppercase text-bold'>"Question of the month"</h4>
        <h4>What is the best morning diet?</h4>
      </section>
      <div className='shadow-lg'></div>
      {/* Content */}
      <section className='w-full flex h-over'>
        {/* Left sidebar */}
        <section className='w-[30%] bg-EBPrimary-100'>
          {/* Buttons */}
          <div className='flex items-center justify-center gap-4'>
            <button className='px-[50px] py-[10px] rounded-[30px] font-bold text-EBPrimary-100 bg-EBLight shadow-lg'>
              All
            </button>
            <button className='px-[50px] py-[10px] rounded-[30px] font-bold text-EBSecondary bg-EBPrimary-100 shadow-lg border border-EBSecondary'>
              Me
            </button>
          </div>
          {/* Lists */}
          <div className='p-[25px]'>
            {allLists.map((list) => {
              return (
                <div
                  key={list.id}
                  className='px-[10px] py-[15px] border-2 border-EBMaroon mb-4 rounded-[12px] flex gap-2 bg-EBLight'
                >
                  <div className='h-[25px] w-[25px] rounded-full bg-EBPrimary-200 flex items-center justify-center'>
                    <i className='ri-user-fill text-EBLight text-20' />
                  </div>
                  <div className='w-full'>
                    <div className='flex items-center gap-2 mb-2 text-EBPrimary-100'>
                      <h4>{list.question}</h4>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                          <i className='ri-thumb-up-fill text-EBPrimary-200 text-20 cursor-pointer' />
                          <span className='text-EBSecondary'>5</span>
                        </div>
                        <div className='flex gap-1'>
                          <i className='ri-thumb-down-fill text-EBPrimary-200 text-20 cursor-pointer' />
                          <span className='text-EBSecondary'>1</span>
                        </div>
                        <div className='flex gap-1'>
                          <i className='ri-chat-1-fill text-EBPrimary-200 text-20' />
                          <span className='text-EBSecondary'>10</span>
                        </div>
                      </div>
                      <p className='text-EBPrimary-100'>{list.time} hrs ago</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Chat */}
        <section className='w-[50%] bg-EBLight p-[20px]'>
          <div className='p-[20px] bg-EBPrimary-100 border-[2px] border-EBMaroon flex items-center gap-2 rounded-[20px] mb-4'>
            <div className='h-[30px] w-[30px] bg-EBLight flex items-center justify-center rounded-full'>
              <i className='ri-user-fill text-EBSecondary text-20' />
            </div>
            <h4>What is best morning diet?</h4>
          </div>
          <div>
            {comments?.map((comment) => {
              return (
                <div
                  key={comment?.id}
                  className='p-[20px] border-[2px] border-EBMaroon rounded-[20px] flex bg-EBPrimary-100 mb-4 gap-2'
                >
                  <div className='h-[30px] w-[30px] bg-EBLight flex items-center justify-center rounded-full'>
                    <i className='ri-user-fill text-EBSecondary text-20' />
                  </div>
                  <div className='w-full'>
                    <h4 className='mb-2'>{comment?.message}</h4>
                    <div className='flex items-center justify-between'>
                      <h6>{comment.time}</h6>
                      <i className='ri-arrow-down-s-line text-EBSecondary text-25'></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Right profile */}
        <section className='w-[20%] bg-EBPrimary-100'>
          <div className='p-[20px] m-[20px] rounded-[20px] bg-EBLight text-center'>
            <div className='h-[100px] w-[100px] rounded-[50px] bg-EBPrimary-100 flex items-center justify-center m-auto mb-4'>
              <i className='ri-user-fill text-EBLight text-[50px]' />
            </div>
            <h3 className='text-lg text-EBPrimary-100 underline mb-4'>test@gmail.com</h3>
            <h2 className='text-2xl text-EBPrimary-100 font-bold underline mb-4'>Points</h2>
            <p className='text-3xl text-EBPrimary-100 font-bold'>457</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default LiveBlogPage;
