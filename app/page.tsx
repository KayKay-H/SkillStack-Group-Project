'use client';
import { useState } from 'react';
import MainContent from '../components/MainContent';

export default function HomePage() {
  const [message, setMessage] = useState('Welcome to the Home Page!');

  return <MainContent message={message} />;
}
