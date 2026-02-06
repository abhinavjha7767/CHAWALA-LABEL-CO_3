import { motion } from 'framer-motion';
import { Clock, Package, Palette, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Reply within 3 Hours',
    description: 'Prompt responses are key to our service. We provide immediate replies during business hours. Feel free to contact us any time.',
  },
  {
    icon: Package,
    title: '1,000 Pieces Minimum',
    description: 'Our services are designed for small to large businesses. For individual customers, orders of 1,000 pieces or more are accepted.',
  },
  {
    icon: Palette,
    title: 'Custom Colors & Processing',
    description: 'We specialize in custom color specifications, foil stamping, embossing, and other enhancements to make your products stand out.',
  },
  {
    icon: Truck,
    title: 'Delivery in 5 Business Days',
    description: 'For example, an order placed on Monday will be delivered the following Monday or later. Special processing may extend the timeline.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            We Can Solve These Issues
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner for premium garment labels and tags
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-lg transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
