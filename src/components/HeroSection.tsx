import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Доставка автомобилей из-за рубежа
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ваш автомобиль мечты — 
              <span className="text-primary"> в России</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Привезем любой автомобиль из Европы, США, Японии и Кореи. 
              Полное сопровождение сделки от подбора до регистрации.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                <Icon name="Search" className="mr-2" size={20} />
                Подобрать авто
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Авто доставлено</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/461c3292-3ba4-419f-94cf-5cd6c19bfbec/files/99498f50-ef4e-4ca8-b861-7d7d51a93a49.jpg" 
              alt="Автомобиль" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-bold">100% гарантия</div>
                  <div className="text-sm text-muted-foreground">Юридическая чистота</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
