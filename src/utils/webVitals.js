/**
 * Web Vitals Performance Monitoring
 * 
 * Tracks Core Web Vitals metrics:
 * - FCP (First Contentful Paint): < 1.8s
 * - LCP (Largest Contentful Paint): < 2.5s
 * - FID (First Input Delay): < 100ms
 * - CLS (Cumulative Layout Shift): < 0.1
 * - TTFB (Time to First Byte): < 600ms
 * - INP (Interaction to Next Paint): < 200ms
 */

// Performance observer for tracking metrics
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.observers = [];
    }

    // Initialize all performance observers
    init() {
        if (typeof window === 'undefined') return;

        this.observeFCP();
        this.observeLCP();
        this.observeFID();
        this.observeCLS();
        this.observeTTFB();
        this.observeINP();
    }

    // First Contentful Paint
    observeFCP() {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === 'first-contentful-paint') {
                        this.recordMetric('FCP', entry.startTime);
                        observer.disconnect();
                    }
                }
            });
            observer.observe({ type: 'paint', buffered: true });
            this.observers.push(observer);
        } catch (e) {
            console.warn('FCP observation not supported:', e);
        }
    }

    // Largest Contentful Paint
    observeLCP() {
        try {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.recordMetric('LCP', lastEntry.renderTime || lastEntry.loadTime);
            });
            observer.observe({ type: 'largest-contentful-paint', buffered: true });
            this.observers.push(observer);
        } catch (e) {
            console.warn('LCP observation not supported:', e);
        }
    }

    // First Input Delay
    observeFID() {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.recordMetric('FID', entry.processingStart - entry.startTime);
                    observer.disconnect();
                }
            });
            observer.observe({ type: 'first-input', buffered: true });
            this.observers.push(observer);
        } catch (e) {
            console.warn('FID observation not supported:', e);
        }
    }

    // Cumulative Layout Shift
    observeCLS() {
        try {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.recordMetric('CLS', clsValue);
                    }
                }
            });
            observer.observe({ type: 'layout-shift', buffered: true });
            this.observers.push(observer);
        } catch (e) {
            console.warn('CLS observation not supported:', e);
        }
    }

    // Time to First Byte
    observeTTFB() {
        try {
            const navigationEntry = performance.getEntriesByType('navigation')[0];
            if (navigationEntry) {
                const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
                this.recordMetric('TTFB', ttfb);
            }
        } catch (e) {
            console.warn('TTFB observation not supported:', e);
        }
    }

    // Interaction to Next Paint
    observeINP() {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    const inp = entry.processingEnd - entry.startTime;
                    if (!this.metrics.INP || inp > this.metrics.INP.value) {
                        this.recordMetric('INP', inp);
                    }
                }
            });
            observer.observe({ type: 'event', buffered: true, durationThreshold: 16 });
            this.observers.push(observer);
        } catch (e) {
            console.warn('INP observation not supported:', e);
        }
    }

    // Record a metric
    recordMetric(name, value) {
        const rating = this.getRating(name, value);
        
        this.metrics[name] = {
            value: Math.round(value),
            rating,
            timestamp: Date.now()
        };

        // Log to console in development
        if (import.meta.env.DEV) {
            console.log(`[Web Vitals] ${name}:`, {
                value: `${Math.round(value)}ms`,
                rating,
                target: this.getTarget(name)
            });
        }

        // Send to analytics (implement your analytics service here)
        this.sendToAnalytics(name, value, rating);
    }

    // Get rating based on thresholds
    getRating(name, value) {
        const thresholds = {
            FCP: { good: 1800, poor: 3000 },
            LCP: { good: 2500, poor: 4000 },
            FID: { good: 100, poor: 300 },
            CLS: { good: 0.1, poor: 0.25 },
            TTFB: { good: 600, poor: 1500 },
            INP: { good: 200, poor: 500 }
        };

        const threshold = thresholds[name];
        if (!threshold) return 'unknown';

        if (value <= threshold.good) return 'good';
        if (value <= threshold.poor) return 'needs-improvement';
        return 'poor';
    }

    // Get target value for metric
    getTarget(name) {
        const targets = {
            FCP: '< 1.8s',
            LCP: '< 2.5s',
            FID: '< 100ms',
            CLS: '< 0.1',
            TTFB: '< 600ms',
            INP: '< 200ms'
        };
        return targets[name] || 'N/A';
    }

    // Send metrics to analytics service
    sendToAnalytics(name, value, rating) {
        // Implement your analytics service here
        // Examples:
        // - Google Analytics 4
        // - Plausible
        // - Custom analytics endpoint
        
        // Example for Google Analytics 4:
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', name, {
                event_category: 'Web Vitals',
                event_label: rating,
                value: Math.round(value),
                non_interaction: true
            });
        }

        // Example for custom endpoint:
        // if (import.meta.env.PROD) {
        //     fetch('/api/analytics/web-vitals', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             metric: name,
        //             value: Math.round(value),
        //             rating,
        //             url: window.location.href,
        //             timestamp: Date.now()
        //         })
        //     }).catch(() => {
        //         // Silently fail - don't block user experience
        //     });
        // }
    }

    // Get all metrics
    getMetrics() {
        return this.metrics;
    }

    // Get summary report
    getSummary() {
        const summary = {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            metrics: this.metrics,
            overall: this.getOverallRating()
        };

        return summary;
    }

    // Get overall performance rating
    getOverallRating() {
        const ratings = Object.values(this.metrics).map(m => m.rating);
        const poorCount = ratings.filter(r => r === 'poor').length;
        const needsImprovementCount = ratings.filter(r => r === 'needs-improvement').length;

        if (poorCount > 0) return 'poor';
        if (needsImprovementCount > 1) return 'needs-improvement';
        return 'good';
    }

    // Cleanup observers
    disconnect() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Initialize on page load
if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') {
        performanceMonitor.init();
    } else {
        window.addEventListener('load', () => {
            performanceMonitor.init();
        });
    }
}

// Export functions
export const initPerformanceMonitoring = () => {
    performanceMonitor.init();
};

export const getPerformanceMetrics = () => {
    return performanceMonitor.getMetrics();
};

export const getPerformanceSummary = () => {
    return performanceMonitor.getSummary();
};

export const logPerformanceSummary = () => {
    const summary = performanceMonitor.getSummary();
    console.table(summary.metrics);
    console.log('Overall Rating:', summary.overall);
};

// Export for debugging in console
if (typeof window !== 'undefined') {
    window.__performanceMonitor = {
        getMetrics: getPerformanceMetrics,
        getSummary: getPerformanceSummary,
        log: logPerformanceSummary
    };
}

export default performanceMonitor;
