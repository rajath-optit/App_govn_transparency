
import React, { useState } from 'react';
import { NewsData } from;

interface NewsProps {
  newsData: NewsData[];
}

export const News: React.FC<NewsProps> = ({ newsData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">News</h3>
