import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Car" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">AutoImport</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">О нас</a>
          <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">Как работаем</a>
          <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="hidden md:inline-flex">
          <Icon name="Phone" className="mr-2" size={18} />
          Позвонить
        </Button>
      </nav>
    </header>
  );
};

export default Header;
