/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Course, ScreenTab } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/screens/HomeScreen';
import { CoursesScreen } from './components/screens/CoursesScreen';
import { PlacementsScreen } from './components/screens/PlacementsScreen';
import { CampusesScreen } from './components/screens/CampusesScreen';
import { CurriculumModal } from './components/modals/CurriculumModal';
import { EnrollModal } from './components/modals/EnrollModal';
import { MenuDrawer } from './components/modals/MenuDrawer';
import { FeeCalculatorModal } from './components/modals/FeeCalculatorModal';
import { Toast } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('home');
  const [viewMode, setViewMode] = useState<'mobile' | 'responsive'>('mobile');

  // Modals state
  const [curriculumCourse, setCurriculumCourse] = useState<Course | null>(null);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState<Course | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeeCalculatorOpen, setIsFeeCalculatorOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenCurriculum = (course: Course) => {
    setCurriculumCourse(course);
    setIsCurriculumOpen(true);
  };

  const handleOpenEnroll = (course?: Course) => {
    setEnrollCourse(course || null);
    setIsEnrollOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0e18] text-[#dfe2f1] flex flex-col items-center justify-start antialiased selection:bg-[#FF3B30] selection:text-white">
      {/* App Shell Container */}
      <div
        className={`w-full min-h-screen bg-[#0f131d] flex flex-col relative transition-all duration-300 ${
          viewMode === 'mobile'
            ? 'max-w-md mx-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-[#2A364F]/40'
            : 'max-w-4xl mx-auto shadow-2xl'
        }`}
      >
        {/* Top Header */}
        <Header
          currentTab={currentTab}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenEnroll={() => handleOpenEnroll()}
          viewMode={viewMode}
          onToggleViewMode={() =>
            setViewMode(viewMode === 'mobile' ? 'responsive' : 'mobile')
          }
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-16 pb-20">
          {currentTab === 'home' && (
            <HomeScreen
              onSelectTab={setCurrentTab}
              onOpenCurriculum={handleOpenCurriculum}
              onOpenEnroll={handleOpenEnroll}
              onNotify={notify}
            />
          )}

          {currentTab === 'courses' && (
            <CoursesScreen
              onOpenCurriculum={handleOpenCurriculum}
              onOpenEnroll={handleOpenEnroll}
              onNotify={notify}
            />
          )}

          {currentTab === 'placements' && (
            <PlacementsScreen
              onNotify={notify}
              onOpenEnroll={() => handleOpenEnroll()}
            />
          )}

          {currentTab === 'campuses' && (
            <CampusesScreen
              onNotify={notify}
              onOpenEnroll={() => handleOpenEnroll()}
            />
          )}
        </main>

        {/* Bottom Tab Navigation */}
        <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

        {/* Curriculum Deep Dive Modal */}
        <CurriculumModal
          course={curriculumCourse}
          isOpen={isCurriculumOpen}
          onClose={() => {
            setIsCurriculumOpen(false);
            setCurriculumCourse(null);
          }}
          onApply={(course) => handleOpenEnroll(course)}
          onNotify={notify}
        />

        {/* Fast-Track Enrollment Modal */}
        <EnrollModal
          isOpen={isEnrollOpen}
          initialCourse={enrollCourse}
          onClose={() => {
            setIsEnrollOpen(false);
            setEnrollCourse(null);
          }}
          onSuccess={(name) => {
            notify(`Seat Reserved for ${name}! Counselor calling shortly.`);
          }}
        />

        {/* Slide Navigation Drawer */}
        <MenuDrawer
          isOpen={isMenuOpen}
          currentTab={currentTab}
          onClose={() => setIsMenuOpen(false)}
          onSelectTab={setCurrentTab}
          onOpenFeeCalculator={() => setIsFeeCalculatorOpen(true)}
          onOpenEnroll={() => handleOpenEnroll()}
          onNotify={notify}
        />

        {/* Fee & Scholarship Calculator Modal */}
        <FeeCalculatorModal
          isOpen={isFeeCalculatorOpen}
          onClose={() => setIsFeeCalculatorOpen(false)}
          onApply={(title) => {
            notify(`Scholarship locked for ${title}`);
            handleOpenEnroll();
          }}
        />

        {/* High-visibility Action Toast */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    </div>
  );
}
