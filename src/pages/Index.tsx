import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const adaptationTasks = [
    {
      id: 1,
      title: 'Регистрация по месту жительства',
      category: 'Документы',
      status: 'completed',
      priority: 'high',
      deadline: '15.11.2025',
    },
    {
      id: 2,
      title: 'Получение медицинской страховки',
      category: 'Медицина',
      status: 'in-progress',
      priority: 'high',
      deadline: '20.11.2025',
    },
    {
      id: 3,
      title: 'Запись на языковые курсы (уровень B1)',
      category: 'Образование',
      status: 'pending',
      priority: 'medium',
      deadline: '01.12.2025',
    },
    {
      id: 4,
      title: 'Открытие банковского счета',
      category: 'Финансы',
      status: 'completed',
      priority: 'high',
      deadline: '10.11.2025',
    },
    {
      id: 5,
      title: 'Поиск работы в сфере IT',
      category: 'Работа',
      status: 'in-progress',
      priority: 'medium',
      deadline: '15.12.2025',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Встреча экспатов: IT-специалисты',
      date: '28.11.2025',
      time: '18:00',
      location: 'Центр "Интеграция"',
    },
    {
      id: 2,
      title: 'Бесплатная консультация юриста',
      date: '30.11.2025',
      time: '14:00',
      location: 'Онлайн',
    },
    {
      id: 3,
      title: 'Культурный фестиваль',
      date: '05.12.2025',
      time: '12:00',
      location: 'Парк Горького',
    },
  ];

  const stats = {
    tasksCompleted: 2,
    tasksTotal: 5,
    daysInCountry: 45,
    eventsAttended: 3,
  };

  const completionPercentage = (stats.tasksCompleted / stats.tasksTotal) * 100;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-accent text-accent-foreground">Завершено</Badge>;
      case 'in-progress':
        return <Badge className="bg-primary text-primary-foreground">В процессе</Badge>;
      case 'pending':
        return <Badge variant="outline">Ожидает</Badge>;
      default:
        return null;
    }
  };

  const getPriorityIcon = (priority: string) => {
    return priority === 'high' ? (
      <Icon name="AlertCircle" size={16} className="text-destructive" />
    ) : (
      <Icon name="Circle" size={16} className="text-muted-foreground" />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary rounded-lg p-2">
              <Icon name="Compass" size={32} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Твой компас</h1>
              <p className="text-sm opacity-90">Поддержка иностранцев в адаптации</p>
            </div>
          </div>
          <Button variant="outline" className="bg-secondary-foreground text-secondary">
            <Icon name="User" size={18} className="mr-2" />
            Профиль
          </Button>
        </div>
      </header>

      <nav className="bg-card border-b">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1">
            {[
              { id: 'dashboard', label: 'Главная', icon: 'Home' },
              { id: 'registration', label: 'Регистрация', icon: 'ClipboardList' },
              { id: 'search', label: 'Поиск услуг', icon: 'Search' },
              { id: 'route', label: 'Мой маршрут', icon: 'Map' },
              { id: 'support', label: 'Поддержка', icon: 'MessageCircle' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-2">Добро пожаловать, Александр!</h2>
              <p className="text-muted-foreground">
                Вы в России уже {stats.daysInCountry} дней. Продолжайте двигаться к цели!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardDescription>Прогресс адаптации</CardDescription>
                  <CardTitle className="text-3xl">{completionPercentage.toFixed(0)}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={completionPercentage} className="h-2" />
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardDescription>Задачи завершено</CardDescription>
                  <CardTitle className="text-3xl">
                    {stats.tasksCompleted}/{stats.tasksTotal}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={16} className="mr-1 text-accent" />
                    Отличная работа!
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardDescription>Дней в стране</CardDescription>
                  <CardTitle className="text-3xl">{stats.daysInCountry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    С 13.10.2025
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardDescription>Посещено событий</CardDescription>
                  <CardTitle className="text-3xl">{stats.eventsAttended}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="mr-1" />
                    Активное участие
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="ListTodo" size={24} className="mr-2 text-primary" />
                    Ваш адаптационный маршрут
                  </CardTitle>
                  <CardDescription>
                    Следуйте этому плану для успешной адаптации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adaptationTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="pt-1">{getPriorityIcon(task.priority)}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{task.title}</h4>
                              {getStatusBadge(task.status)}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground space-x-4">
                              <span className="flex items-center">
                                <Icon name="Tag" size={14} className="mr-1" />
                                {task.category}
                              </span>
                              <span className="flex items-center">
                                <Icon name="Clock" size={14} className="mr-1" />
                                {task.deadline}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="ChevronRight" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                      Ближайшие события
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="border-l-4 border-primary pl-4 py-2">
                          <h4 className="font-medium mb-1">{event.title}</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-center">
                              <Icon name="CalendarDays" size={14} className="mr-2" />
                              {event.date} в {event.time}
                            </p>
                            <p className="flex items-center">
                              <Icon name="MapPin" size={14} className="mr-2" />
                              {event.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="AlertCircle" size={24} className="mr-2" />
                      Важное уведомление
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Напоминаем: до 20.11.2025 необходимо завершить оформление медицинской страховки.
                      Это обязательное требование для всех иностранных граждан.
                    </p>
                    <Button variant="secondary" className="mt-4 w-full">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'registration' && (
          <div className="animate-fade-in">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Регистрация в системе</CardTitle>
                <CardDescription>
                  Заполните анкету для создания персонализированного плана адаптации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="ClipboardList" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-6">
                    Форма регистрации будет реализована на следующем этапе
                  </p>
                  <Button>Начать регистрацию</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Поиск услуг и ресурсов</CardTitle>
                <CardDescription>
                  Найдите жилье, медицинские учреждения, образовательные программы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="housing" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="housing">
                      <Icon name="Home" size={16} className="mr-2" />
                      Жилье
                    </TabsTrigger>
                    <TabsTrigger value="medical">
                      <Icon name="Heart" size={16} className="mr-2" />
                      Медицина
                    </TabsTrigger>
                    <TabsTrigger value="education">
                      <Icon name="GraduationCap" size={16} className="mr-2" />
                      Образование
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="housing" className="py-6">
                    <div className="text-center py-12">
                      <Icon name="Home" size={64} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Интеллектуальный поиск жилья будет доступен на следующем этапе
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="medical" className="py-6">
                    <div className="text-center py-12">
                      <Icon name="Heart" size={64} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Поиск медицинских учреждений будет доступен на следующем этапе
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="py-6">
                    <div className="text-center py-12">
                      <Icon name="GraduationCap" size={64} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Поиск образовательных программ будет доступен на следующем этапе
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'route' && (
          <div className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Персональный маршрут адаптации</CardTitle>
                <CardDescription>
                  Детальный план с учетом ваших целей и предпочтений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {adaptationTasks.map((task, index) => (
                    <div key={task.id} className="relative pl-8">
                      <div
                        className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          task.status === 'completed'
                            ? 'bg-accent text-accent-foreground'
                            : task.status === 'in-progress'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {task.status === 'completed' ? (
                          <Icon name="Check" size={14} />
                        ) : (
                          <span className="text-xs font-bold">{index + 1}</span>
                        )}
                      </div>
                      {index < adaptationTasks.length - 1 && (
                        <div className="absolute left-3 top-6 w-0.5 h-full bg-border" />
                      )}
                      <Card className="mb-4">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{task.title}</CardTitle>
                            {getStatusBadge(task.status)}
                          </div>
                          <CardDescription>
                            {task.category} • Срок: {task.deadline}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="animate-fade-in">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Служба поддержки</CardTitle>
                <CardDescription>
                  Мы готовы помочь вам на каждом этапе адаптации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-2 hover-scale cursor-pointer">
                    <CardHeader>
                      <Icon name="Phone" size={32} className="mb-2 text-primary" />
                      <CardTitle>Горячая линия</CardTitle>
                      <CardDescription>8-800-555-35-35</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover-scale cursor-pointer">
                    <CardHeader>
                      <Icon name="Mail" size={32} className="mb-2 text-primary" />
                      <CardTitle>Email поддержка</CardTitle>
                      <CardDescription>support@compass.gov</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover-scale cursor-pointer">
                    <CardHeader>
                      <Icon name="MessageCircle" size={32} className="mb-2 text-primary" />
                      <CardTitle>Онлайн-чат</CardTitle>
                      <CardDescription>Ответ в течение 5 минут</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-2 hover-scale cursor-pointer">
                    <CardHeader>
                      <Icon name="FileText" size={32} className="mb-2 text-primary" />
                      <CardTitle>База знаний</CardTitle>
                      <CardDescription>Ответы на частые вопросы</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-16 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О платформе</h3>
              <p className="text-sm opacity-90">
                Государственный сервис поддержки иностранцев в адаптации на территории РФ
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Нормативная база</li>
                <li>Центры адаптации</li>
                <li>Официальные порталы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Телефон: 8-800-555-35-35</li>
                <li>Email: info@compass.gov</li>
                <li>Режим работы: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-75">
            © 2025 Твой компас. Министерство цифрового развития РФ
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;