import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    carPrice: '',
    country: 'germany',
  });

  const calculateTotal = () => {
    const price = parseFloat(calculatorData.carPrice) || 0;
    const delivery = price * 0.15;
    const customs = price * 0.25;
    const service = 50000;
    return Math.round(price + delivery + customs + service);
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на доставке автомобилей из-за рубежа с 2009 года
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Globe',
                title: 'Глобальная сеть',
                description: 'Партнеры в 15+ странах мира для быстрого поиска вашего авто'
              },
              {
                icon: 'Shield',
                title: 'Юридическая защита',
                description: 'Полная проверка истории автомобиля и документов'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                description: 'Логистика под ключ — от аукциона до вашего гаража'
              },
              {
                icon: 'FileText',
                title: 'Прозрачность',
                description: 'Отчеты на каждом этапе, никаких скрытых платежей'
              },
              {
                icon: 'Wrench',
                title: 'Техосмотр',
                description: 'Предпродажная диагностика и устранение недостатков'
              },
              {
                icon: 'Heart',
                title: 'Забота о клиентах',
                description: 'Персональный менеджер и поддержка 24/7'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подборка самых востребованных автомобилей, которые мы привозим
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/461c3292-3ba4-419f-94cf-5cd6c19bfbec/files/99498f50-ef4e-4ca8-b861-7d7d51a93a49.jpg',
                name: 'BMW M5',
                year: '2022',
                price: '8 500 000',
                country: 'Германия'
              },
              {
                image: 'https://cdn.poehali.dev/projects/461c3292-3ba4-419f-94cf-5cd6c19bfbec/files/7fef83fa-cf92-4255-a904-08eb32f23b6c.jpg',
                name: 'Mercedes-Benz S-Class',
                year: '2023',
                price: '12 300 000',
                country: 'Германия'
              },
              {
                image: 'https://cdn.poehali.dev/projects/461c3292-3ba4-419f-94cf-5cd6c19bfbec/files/73172024-35c8-4131-bc28-e6425a245c34.jpg',
                name: 'Porsche 911',
                year: '2022',
                price: '15 200 000',
                country: 'США'
              }
            ].map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in">
                <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{car.name}</CardTitle>
                      <CardDescription>{car.year} • {car.country}</CardDescription>
                    </div>
                    <Badge variant="secondary">{car.country}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">от</div>
                      <div className="text-2xl font-bold text-primary">{car.price} ₽</div>
                    </div>
                    <Button>
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Посмотреть весь каталог
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
          </div>
          <Tabs defaultValue="import" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="import">Импорт авто</TabsTrigger>
              <TabsTrigger value="customs">Таможня</TabsTrigger>
              <TabsTrigger value="service">Сервис</TabsTrigger>
            </TabsList>
            <TabsContent value="import" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Plane" className="text-primary" />
                    Полный импорт автомобилей
                  </CardTitle>
                  <CardDescription>Доставка под ключ из любой точки мира</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Поиск и подбор автомобиля</div>
                      <div className="text-muted-foreground">По вашим критериям на аукционах и у дилеров</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Выкуп и оплата</div>
                      <div className="text-muted-foreground">Участие в торгах, оформление документов</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Доставка и страхование</div>
                      <div className="text-muted-foreground">Морская или наземная транспортировка с полной защитой</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="customs" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileCheck" className="text-primary" />
                    Таможенное оформление
                  </CardTitle>
                  <CardDescription>Все документы и процедуры за вас</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Расчет пошлин и сборов</div>
                      <div className="text-muted-foreground">Точный калькулятор всех таможенных платежей</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Подготовка документов</div>
                      <div className="text-muted-foreground">Декларация, сертификаты, ветеринарный контроль</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Растаможка под ключ</div>
                      <div className="text-muted-foreground">Полное сопровождение на всех этапах</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" className="text-primary" />
                    Дополнительные услуги
                  </CardTitle>
                  <CardDescription>Полная поддержка после доставки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Регистрация в ГИБДД</div>
                      <div className="text-muted-foreground">Постановка на учет, получение номеров</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Предпродажная подготовка</div>
                      <div className="text-muted-foreground">Диагностика, устранение дефектов, детейлинг</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Гарантийное обслуживание</div>
                      <div className="text-muted-foreground">Постгарантийная поддержка и консультации</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Этапы работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный процесс от заявки до получения ключей
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                icon: 'MessageSquare',
                title: 'Консультация',
                description: 'Обсуждаем ваши пожелания, бюджет и сроки. Подбираем оптимальные варианты.'
              },
              {
                step: '02',
                icon: 'Search',
                title: 'Поиск автомобиля',
                description: 'Находим подходящие варианты на аукционах и у официальных дилеров.'
              },
              {
                step: '03',
                icon: 'FileCheck',
                title: 'Проверка и выкуп',
                description: 'Проверяем техническое состояние, историю, выкупаем автомобиль.'
              },
              {
                step: '04',
                icon: 'Ship',
                title: 'Доставка',
                description: 'Организуем логистику и страхование груза до вашего города.'
              },
              {
                step: '05',
                icon: 'FileText',
                title: 'Таможня',
                description: 'Оформляем все документы, проходим таможню и сертификацию.'
              },
              {
                step: '06',
                icon: 'Key',
                title: 'Передача ключей',
                description: 'Регистрируем в ГИБДД и передаем вам готовый автомобиль.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in">
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-2">
                    {item.step}
                  </div>
                  {index < 5 && <div className="w-1 h-full bg-primary/20 mt-2"></div>}
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon name={item.icon} className="text-accent" size={24} />
                      </div>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте примерную стоимость доставки вашего автомобиля
            </p>
          </div>
          <Card className="max-w-2xl mx-auto animate-scale-in">
            <CardHeader>
              <CardTitle>Калькулятор стоимости импорта</CardTitle>
              <CardDescription>Введите данные для расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="carPrice">Стоимость автомобиля ($)</Label>
                <Input
                  id="carPrice"
                  type="number"
                  placeholder="Например: 50000"
                  value={calculatorData.carPrice}
                  onChange={(e) => setCalculatorData({ ...calculatorData, carPrice: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Страна</Label>
                <select
                  id="country"
                  className="w-full p-2 border rounded-md"
                  value={calculatorData.country}
                  onChange={(e) => setCalculatorData({ ...calculatorData, country: e.target.value })}
                >
                  <option value="germany">Германия</option>
                  <option value="usa">США</option>
                  <option value="japan">Япония</option>
                  <option value="korea">Южная Корея</option>
                </select>
              </div>
              <Separator />
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Стоимость авто:</span>
                  <span className="font-semibold">{calculatorData.carPrice ? `${parseInt(calculatorData.carPrice) * 100}` : '0'} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка (~15%):</span>
                  <span className="font-semibold">{calculatorData.carPrice ? `${Math.round(parseInt(calculatorData.carPrice) * 100 * 0.15)}` : '0'} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Таможня (~25%):</span>
                  <span className="font-semibold">{calculatorData.carPrice ? `${Math.round(parseInt(calculatorData.carPrice) * 100 * 0.25)}` : '0'} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Наши услуги:</span>
                  <span className="font-semibold">50 000 ₽</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Итого:</span>
                  <span className="font-bold text-primary text-2xl">{calculateTotal().toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" className="mr-2" size={18} />
                Получить точный расчет
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей М.',
                car: 'BMW X5',
                rating: 5,
                text: 'Заказывал BMW X5 из Германии. Ребята молодцы — все четко, быстро, без скрытых платежей. Машина пришла в идеальном состоянии!'
              },
              {
                name: 'Дмитрий К.',
                car: 'Mercedes-Benz E-Class',
                rating: 5,
                text: 'Очень доволен работой! Помогли с выбором, провели через все этапы. Получил свой Mercedes за 2 месяца. Рекомендую!'
              },
              {
                name: 'Сергей В.',
                car: 'Porsche Cayenne',
                rating: 5,
                text: 'Профессиональный подход на всех этапах. Особенно понравилась работа с таможней — все сделали за меня. Отличная компания!'
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <Badge variant="secondary">{review.car}</Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответим на все вопросы и поможем с выбором автомобиля
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Телефон</CardTitle>
                      <CardDescription>+7 (495) 123-45-67</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Email</CardTitle>
                      <CardDescription>info@autoimport.ru</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Адрес</CardTitle>
                      <CardDescription>Москва, ул. Примерная, д. 123</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>Режим работы</CardTitle>
                      <CardDescription>Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-16:00</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded-md min-h-[100px]"
                    placeholder="Расскажите, какой автомобиль вас интересует..."
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
