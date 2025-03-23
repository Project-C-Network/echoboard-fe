import React, { useState, useCallback, Suspense, lazy } from 'react';
import { sampleQuestion, sampleComments } from '../../utils/constants';
import { Comment, Question } from '../../utils/types';

const EBQuestionCard = lazy(() => import('../EBQuestionCard'));
const EBCommentCard = lazy(() => import('../EBCommentCard'));

const EBChatInterface = () => {
  const [question] = useState<Question>(sampleQuestion);
  const [comments] = useState<Comment[]>(sampleComments);
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());

  const toggleExpand = useCallback((commentId: string) => {
    setExpandedStates((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  }, []);

  return (
    <div className='bg-EBLight shadow-md p-4'>
      <div className='space-y-4'>
        <Suspense fallback={<div>Loading Question Card...</div>}>
          <EBQuestionCard question={question} />
        </Suspense>
        {comments.map((comment) => (
          <Suspense key={comment.id} fallback={<div>Loading Comment Card...</div>}>
            <EBCommentCard
              comment={comment}
              isExpanded={expandedStates.has(comment.id)}
              toggleExpand={toggleExpand}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default React.memo(EBChatInterface);
