import { describe, it, expect } from 'vitest';
import { render } from './test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

// Extend expect with jest-axe matchers
expect.extend(toHaveNoViolations);

// Import components to test
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CourseCard from '../components/CourseCard';
import FacultyCard from '../components/FacultyCard';
import GalleryItem from '../components/GalleryItem';
import TestimonialCard from '../components/TestimonialCard';
import PageHero from '../components/PageHero';
import GlassCard from '../components/GlassCard';

describe('Accessibility Tests', () => {
  describe('Navigation Components', () => {
    it('Navbar should have no accessibility violations', async () => {
      const { container } = render(<Navbar isContentVisible={true} isSplashVisible={false} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Footer should have no accessibility violations', async () => {
      const { container } = render(<Footer />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Form Components', () => {
    it('ContactForm should have no accessibility violations', async () => {
      const mockSubmit = async () => {};
      const { container } = render(<ContactForm variant="contact" onSubmit={mockSubmit} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Card Components', () => {
    it('CourseCard should have no accessibility violations', async () => {
      const mockCourse = {
        title: 'CBSE Mathematics',
        description: 'Comprehensive math course',
        curriculum: 'CBSE',
        grade: 'Grade 10',
        mode: 'Online',
        subjects: ['Algebra', 'Geometry'],
        color: '#7c3aed',
        image: 'https://placehold.co/400x300',
        duration: '6 months',
        fees: { amount: 1000, currency: 'AED', period: 'month' }
      };
      const { container } = render(<CourseCard course={mockCourse} onEnroll={() => {}} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('FacultyCard should have no accessibility violations', async () => {
      const mockFaculty = {
        name: 'John Doe',
        subjects: ['Mathematics', 'Physics'],
        qualifications: 'PhD in Mathematics',
        photo: 'https://i.pravatar.cc/200',
        bio: 'Experienced educator',
        experience: '10',
        specializations: ['Calculus', 'Algebra']
      };
      const { container } = render(<FacultyCard faculty={mockFaculty} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('GalleryItem should have no accessibility violations', async () => {
      const mockItem = {
        src: 'https://placehold.co/400x300',
        alt: 'Classroom photo',
        type: 'image',
        category: 'classroom'
      };
      const { container} = render(<GalleryItem item={mockItem} onClick={() => {}} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('TestimonialCard should have no accessibility violations', async () => {
      const mockTestimonial = {
        name: 'Jane Smith',
        role: 'Grade 12 Student',
        course: 'CBSE',
        rating: 5,
        text: 'Great experience!',
        photo: 'https://i.pravatar.cc/60',
        date: '2024-01-01'
      };
      const { container } = render(<TestimonialCard testimonial={mockTestimonial} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('GlassCard should have no accessibility violations', async () => {
      const { container } = render(
        <GlassCard>
          <h2>Test Content</h2>
          <p>This is test content</p>
        </GlassCard>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Hero Components', () => {
    it('PageHero should have no accessibility violations', async () => {
      const { container } = render(
        <PageHero 
          title="Test Page" 
          subtitle="This is a test subtitle"
          variant="primary"
        />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
