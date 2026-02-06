import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import wovenLabelImg from '@/assets/woven-label.jpg';
import hangTagsImg from '@/assets/hang-tags.jpg';
import stickersImg from '@/assets/stickers.jpg';
import careLabelsImg from '@/assets/care-labels.jpg';

const products = [
  {
    id: 1,
    title: 'Woven Labels',
    description: 'High-quality woven labels with intricate designs for premium clothing brands.',
    image: wovenLabelImg,
  },
  {
    id: 2,
    title: 'Hang Tags',
    description: 'Custom hang tags that showcase your brand identity and product information.',
    image: hangTagsImg,
  },
  {
    id: 3,
    title: 'Clothing Stickers',
    description: 'Durable adhesive labels and stickers for care instructions and branding.',
    image: stickersImg,
  },
  {
    id: 4,
    title: 'Care Labels',
    description: 'Printed care and wash instruction labels meeting industry standards.',
    image: careLabelsImg,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Premium Label Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining printing excellence and custom processing for any label need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="navy" size="lg">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
