import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={`${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

const CustomerFeedback = ({ data }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-3 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-bold mb-3 text-left">{data.title}</h2>
      <div className="flex-grow overflow-auto">
        <div className="space-y-3">
          {data.data.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="bg-gray-700 rounded-lg p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-1">
                <img
                  className="h-6 w-6 rounded-full mr-2"
                  src={`https://i.pravatar.cc/24?u=${feedback.name}`}
                  alt={`${feedback.name}'s avatar`}
                />
                <div>
                  <h3 className="text-white font-medium text-xs">{feedback.name}</h3>
                  <StarRating rating={feedback.rating} />
                </div>
              </div>
              <p className="text-gray-300 text-xs line-clamp-2">{feedback.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerFeedback;