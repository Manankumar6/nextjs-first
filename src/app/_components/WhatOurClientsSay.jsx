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
 const {user} = useAuth()

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
                <Card className="w-full max-w-[300px] sm:max-w-[250px] h-[200px] mx-auto relative">
                  {/* Close Button */}
                  {user.admin && <button
                    onClick={() => handleRemoveFeedback(feed._id)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                    aria-label="Remove Feedback"
                  >
                    <X className="h-4 w-4 text-gray-800 dark:text-gray-300" />
                  </button>}
                  <CardContent className="flex flex-col h-full items-center justify-center p-4">
                    <span>{feed.feedback}</span>
                    <p className="text-right mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 italic">-{feed.name}</p>
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
