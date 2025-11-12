import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const MainSections = () => {
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
    <>
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
    </>
  );
};

export default MainSections;
