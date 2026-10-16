import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import PageLoader from './components/PageLoader.jsx';

// Code-split routes
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const MissionVision = lazy(() => import('./pages/MissionVision.jsx'));
const ChairpersonMessage = lazy(() => import('./pages/ChairpersonMessage.jsx'));
const ExecutiveTrustee = lazy(() => import('./pages/ExecutiveTrustee.jsx'));
const ManagingTrustee = lazy(() => import('./pages/ManagingTrustee.jsx'));
const PrincipalMessage = lazy(() => import('./pages/PrincipalMessage.jsx'));
const SchoolSong = lazy(() => import('./pages/SchoolSong.jsx'));

const LearningEnvironment = lazy(() => import('./pages/LearningEnvironment.jsx'));
const Examination = lazy(() => import('./pages/Examination.jsx'));
const ComputerScience = lazy(() => import('./pages/ComputerScience.jsx'));
const Counselling = lazy(() => import('./pages/Counselling.jsx'));
const Faculty = lazy(() => import('./pages/Faculty.jsx'));

const WhySIS = lazy(() => import('./pages/WhySIS.jsx'));
const AdmissionProcess = lazy(() => import('./pages/AdmissionProcess.jsx'));
const OnlineRegistration = lazy(() => import('./pages/OnlineRegistration.jsx'));
const FeeStructure = lazy(() => import('./pages/FeeStructure.jsx'));
const AdmissionForm = lazy(() => import('./pages/AdmissionForm.jsx'));

const PrePrimary = lazy(() => import('./pages/PrePrimary.jsx'));
const Primary = lazy(() => import('./pages/Primary.jsx'));
const BeyondAcademics = lazy(() => import('./pages/BeyondAcademics.jsx'));
const Sports = lazy(() => import('./pages/Sports.jsx'));

const Awards = lazy(() => import('./pages/Awards.jsx'));
const Results = lazy(() => import('./pages/Results.jsx'));
const MedhaviAwards = lazy(() => import('./pages/MedhaviAwards.jsx'));

const RecentEvents = lazy(() => import('./pages/RecentEvents.jsx'));
const UpcomingEvents = lazy(() => import('./pages/UpcomingEvents.jsx'));
const News = lazy(() => import('./pages/News.jsx'));
const Circulars = lazy(() => import('./pages/Circulars.jsx'));

const Facilities = lazy(() => import('./pages/Facilities.jsx'));
const SmartClassroom = lazy(() => import('./pages/SmartClassroom.jsx'));
const ScienceLab = lazy(() => import('./pages/ScienceLab.jsx'));
const ComputerLab = lazy(() => import('./pages/ComputerLab.jsx'));
const Library = lazy(() => import('./pages/Library.jsx'));
const SwimmingPool = lazy(() => import('./pages/SwimmingPool.jsx'));
const ArtRoom = lazy(() => import('./pages/ArtRoom.jsx'));
const MusicDance = lazy(() => import('./pages/MusicDance.jsx'));

const PhotoGallery = lazy(() => import('./pages/PhotoGallery.jsx'));
const VideoGallery = lazy(() => import('./pages/VideoGallery.jsx'));
const VirtualTour = lazy(() => import('./pages/VirtualTour.jsx'));

const Downloads = lazy(() => import('./pages/Downloads.jsx'));
const Newsletter = lazy(() => import('./pages/Newsletter.jsx'));
const Disclosure = lazy(() => import('./pages/Disclosure.jsx'));
const Career = lazy(() => import('./pages/Career.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          {/* About SIS */}
          <Route path="about" element={<About />} />
          <Route path="mission-vision" element={<MissionVision />} />
          <Route path="chairperson-message" element={<ChairpersonMessage />} />
          <Route path="executive-trustee" element={<ExecutiveTrustee />} />
          <Route path="managing-trustee" element={<ManagingTrustee />} />
          <Route path="principal-message" element={<PrincipalMessage />} />
          <Route path="school-song" element={<SchoolSong />} />

          {/* Academics */}
          <Route path="learning-environment" element={<LearningEnvironment />} />
          <Route path="examination" element={<Examination />} />
          <Route path="computer-science" element={<ComputerScience />} />
          <Route path="counselling" element={<Counselling />} />
          <Route path="faculty" element={<Faculty />} />

          {/* Admissions */}
          <Route path="why-sis" element={<WhySIS />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route path="online-registration" element={<OnlineRegistration />} />
          <Route path="fee-structure" element={<FeeStructure />} />
          <Route path="admission-form" element={<AdmissionForm />} />

          {/* Life @ SIS */}
          <Route path="pre-primary" element={<PrePrimary />} />
          <Route path="primary" element={<Primary />} />
          <Route path="beyond-academics" element={<BeyondAcademics />} />
          <Route path="sports" element={<Sports />} />

          {/* Achievements */}
          <Route path="awards" element={<Awards />} />
          <Route path="results" element={<Results />} />
          <Route path="medhavi-awards" element={<MedhaviAwards />} />

          {/* News & Events */}
          <Route path="recent-events" element={<RecentEvents />} />
          <Route path="upcoming-events" element={<UpcomingEvents />} />
          <Route path="news" element={<News />} />
          <Route path="circulars" element={<Circulars />} />

          {/* Campus */}
          <Route path="facilities" element={<Facilities />} />
          <Route path="smart-classroom" element={<SmartClassroom />} />
          <Route path="science-lab" element={<ScienceLab />} />
          <Route path="computer-lab" element={<ComputerLab />} />
          <Route path="library" element={<Library />} />
          <Route path="swimming-pool" element={<SwimmingPool />} />
          <Route path="art-room" element={<ArtRoom />} />
          <Route path="music-dance" element={<MusicDance />} />

          {/* Gallery */}
          <Route path="photo-gallery" element={<PhotoGallery />} />
          <Route path="video-gallery" element={<VideoGallery />} />
          <Route path="virtual-tour" element={<VirtualTour />} />

          {/* Resources */}
          <Route path="downloads" element={<Downloads />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="disclosure" element={<Disclosure />} />

          {/* Careers & Contact */}
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
