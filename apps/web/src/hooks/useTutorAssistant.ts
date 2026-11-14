'use client';

import {useEffect, useRef, useState} from 'react';
import type {User} from '@supabase/supabase-js';
import type {StudentProfile} from '@/lib/profile';
import type {KogStudyContext} from '@/lib/kog-study-context';

export function useTutorAssistant(
  user: User | null,
  profile: StudentProfile | null,
  view: string,
  setView: (view: string) => void,
  onNavigate: (view: string) => void
) {
  const [assistantInitialized, setAssistantInitialized] = useState(false);
  const [tutorReturnView, setTutorReturnView] = useState<'dashboard'>('dashboard');
  const [studyContext, setStudyContext] = useState<KogStudyContext | null>(null);
  const [practiceFocus, setPracticeFocus] = useState<{subject: string; topic: string; questionId: string} | null>(null);
  const [aiFocusLessonId, setAiFocusLessonId] = useState<string | null>(null);
  const [lessonPracticeRequestId, setLessonPracticeRequestId] = useState(0);
  const [learningFocus, setLearningFocus] = useState<{subject: string; lessonId: string} | null>(null);
  const [recoveryMode, setRecoveryMode] = useState(false);

  const openAssistant = () => {
    if (view !== 'tutor') setTutorReturnView(view as 'dashboard');
    setAssistantInitialized(true);
    onNavigate('tutor');
  };

  const closeAssistant = () => {
    onNavigate(tutorReturnView);
  };

  const practiceFromLesson = (focus: {subject: string; topic: string; questionId: string}) => {
    setLessonPracticeRequestId(0);
    setAiFocusLessonId(null);
    setPracticeFocus(focus);
    setStudyContext(null);
    onNavigate('questions');
  };

  const generateForLesson = (lessonId: string, generateNew = false) => {
    setLessonPracticeRequestId(prev => generateNew ? prev + 1 : 0);
    setAiFocusLessonId(lessonId);
    setPracticeFocus(null);
    setStudyContext(null);
    onNavigate('questions');
  };

  const openFocusedLesson = (focus: {subject: string; lessonId: string}) => {
    setLearningFocus(focus);
    setStudyContext(null);
    onNavigate('learn');
  };

  const openPlannerForDate = (date: string) => {
    onNavigate('plans');
  };

  const openWeeklyReview = () => {
    onNavigate('weekly');
  };

  // Reset tutor assistant state when user changes
  useEffect(() => {
    if (!user) {
      setAssistantInitialized(false);
      setStudyContext(null);
      setPracticeFocus(null);
      setAiFocusLessonId(null);
      setLessonPracticeRequestId(0);
      setLearningFocus(null);
    }
  }, [user]);

  return {
    assistantInitialized,
    setAssistantInitialized,
    tutorReturnView,
    setTutorReturnView,
    studyContext,
    setStudyContext,
    practiceFocus,
    setPracticeFocus,
    aiFocusLessonId,
    setAiFocusLessonId,
    lessonPracticeRequestId,
    setLessonPracticeRequestId,
    learningFocus,
    setLearningFocus,
    recoveryMode,
    setRecoveryMode,
    openAssistant,
    closeAssistant,
    practiceFromLesson,
    generateForLesson,
    openFocusedLesson,
    openPlannerForDate,
    openWeeklyReview,
  };
}