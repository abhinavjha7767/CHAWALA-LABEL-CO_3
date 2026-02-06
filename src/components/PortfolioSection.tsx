import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import wovenLabelImg from '@/assets/woven-label.jpg';
import hangTagsImg from '@/assets/hang-tags.jpg';
import stickersImg from '@/assets/stickers.jpg';
import careLabelsImg from '@/assets/care-labels.jpg';

const works = [
  { id: 1, title: 'Fashion Brand Labels', category: 'Woven Labels', image: wovenLabelImg },
  { id: 2, title: 'Luxury Hang Tags', category: 'Hang Tags', image: hangTagsImg },
  { id: 3, title: 'Care Instruction Labels', category: 'Care Labels', image: careLabelsImg },
  { id: 4, title: 'Brand Stickers Collection', category: 'Stickers', image: stickersImg },
  { id: 5, title: 'Premium Clothing Tags', category: 'Woven Labels', image: wovenLabelImg },
  { id: 6, title: 'Custom Size Labels', category: 'Care Labels', image: careLabelsImg },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-secondary/50">
        <svg
          className="absolute bottom-0 w-full h-12"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48L60 42.7C120 37.3 240 26.7 360 21.3C480 16 600 16 720 21.3C840 26.7 960 37.3 1080 40C1200 42.7 1320 37.3 1380 34.7L1440 32V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container relative z-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Works
          </h2>
          <p className="text-muted-foreground font-medium mb-2">
            Label Printing Achievements
          </p>
          <p className="text-muted-foreground text-sm">
            Specifications you'll want to imitate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">View Details</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">{work.category}</p>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="navy" size="lg">
            All Production Examples
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
