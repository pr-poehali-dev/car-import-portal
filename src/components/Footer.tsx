import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Car" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">AutoImport</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональный импорт автомобилей из-за рубежа с 2009 года
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Импорт авто</div>
              <div>Таможня</div>
              <div>Доставка</div>
              <div>Регистрация</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>О нас</div>
              <div>Отзывы</div>
              <div>Контакты</div>
              <div>Вакансии</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Соцсети</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="text-center text-muted-foreground">
          © 2024 AutoImport. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
