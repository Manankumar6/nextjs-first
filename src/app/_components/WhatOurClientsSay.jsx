'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // shadcn icon
import { useAuth } from '../context/AuthContext';

const WhatOurClientsSay = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const { user } = useAuth()

  // Fetch feedback
  const fetchFeedback = async () => {
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();

      if (response.ok) {
        setFeedbackList(data);
      } else {
        console.error('Failed to fetch feedback:', data.message);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  // Remove feedback by ID (Soft delete: mark as isDeleted)
  const handleRemoveFeedback = async (id) => {
    try {
      const response = await fetch(`/api/feedback?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json', // Make sure to specify JSON content type
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Re-fetch the feedback to reflect changes
        fetchFeedback();

      } else {
        console.error('Failed to remove feedback:', data.error);
      }
    } catch (error) {
      console.error('Error removing feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [setFeedbackList]);

  return (
    <section className="dark:bg-background dark:bg-grid-small-white/[0.2] px-6 py-12 text-center">
      <h2 className="text-4xl sm:text-6xl font-bold relative mt-5 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  text-center">What Our Clients Say</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-[90%] sm:max-w-[40rem] md:max-w-[55rem] mx-auto overflow-hidden md:overflow-visible"
      >
        <CarouselContent>
          {feedbackList.map((feed, index) => (
            <CarouselItem key={index} className="sm:basis-3/4 md:basis-1/2 lg:basis-1/3 px-2">
              <div className="p-4 relative">
                {/* Card with Close Button */}
                <Card className="w-full max-w-[300px] sm:max-w-[250px] h-[230px] mx-auto relative rounded-2xl border shadow-md hover:shadow-lg transition-all">

                  {/* Close Button */}
                  {user.admin && (
                    <button
                      onClick={() => handleRemoveFeedback(feed._id)}
                      className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                      aria-label="Remove Feedback"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  )}

                  <CardContent className="flex flex-col items-center justify-between h-full p-4">

                    {/* Stars */}
                  <div className="flex items-center space-x-1">
  {[1,2,3,4,5].map((star) => {
    const rating = Number(feed?.rating ?? 0);  // 👈 FIX

    return (
      <span
        key={star}
        className={`text-xl ${
          rating >= star ? "text-yellow-500" : "text-gray-400"
        }`}
      >
        ★
      </span>
    );
  })}
</div>


                    {/* Feedback */}
                    <p className="text-center text-gray-400 mt-3 italic">
                      "{feed.feedback}"
                    </p>

                    {/* Name */}
                    <p className="mt-4 text-sm font-semibold italic text-gray-600">
                      — {feed.name}
                    </p>
                  </CardContent>
                </Card>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default WhatOurClientsSay;
