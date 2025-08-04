
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Simulated pie chart component (for demo)
const PieChart = ({ data }: { data: Array<{ name: string; value: number; color: string }> }) => {
  // This is just a placeholder - in a real app, you'd use Recharts or another charting library
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-vodrak-navy dark:text-white">{data[0].value}%</div>
          <div className="text-xs text-gray-500">Complété</div>
        </div>
      </div>
      {/* Circle representing the chart */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle 
          cx="50" cy="50" r="40" 
          stroke="#e6e6e6" 
          strokeWidth="15" 
          fill="none"
          className="dark:opacity-20" 
        />
        <circle 
          cx="50" cy="50" r="40" 
          stroke={data[0].color} 
          strokeWidth="15" 
          fill="none"
          strokeDasharray={`${data[0].value * 2.51} 251`} 
          strokeDashoffset="0" 
          transform="rotate(-90 50 50)" 
        />
      </svg>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-vodrak-lightgray dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-vodrak-navy dark:text-white">Tableau de bord</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-vodrak-navy dark:text-white">Profil client</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-vodrak-navy text-white flex items-center justify-center text-2xl font-bold mx-auto mb-2">
                        SD
                      </div>
                      <h3 className="font-semibold text-lg dark:text-white">Société Dupont</h3>
                      <p className="text-sm text-gray-500">SARL au capital de 50 000€</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">SIREN:</span>
                        <span className="font-medium dark:text-gray-200">123 456 789</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Expert-comptable:</span>
                        <span className="font-medium dark:text-gray-200">Marie Martin</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Dernier bilan:</span>
                        <span className="font-medium dark:text-gray-200">31/12/2024</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-vodrak-navy text-vodrak-navy hover:bg-vodrak-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-vodrak-navy">
                      Modifier le profil
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-vodrak-navy dark:text-white">Messages récents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-vodrak-navy pl-3 py-1 dark:border-vodrak-gold">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Votre déclaration TVA a été déposée avec succès.</p>
                        <p className="text-xs text-gray-500">Hier à 14:30</p>
                      </div>
                      <div className="border-l-4 border-vodrak-navy pl-3 py-1 dark:border-vodrak-gold">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Pensez à nous transmettre vos factures pour le mois de mars.</p>
                        <p className="text-xs text-gray-500">Il y a 3 jours</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-vodrak-navy dark:text-vodrak-gold">
                      Voir tous les messages
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-vodrak-navy dark:text-white">Prochaines échéances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium dark:text-gray-200">TVA Avril 2025</p>
                          <p className="text-xs text-gray-500">15/05/2025</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                          À venir
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium dark:text-gray-200">DSN Mai 2025</p>
                          <p className="text-xs text-gray-500">05/05/2025</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          Urgent
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium dark:text-gray-200">IS - Acompte</p>
                          <p className="text-xs text-gray-500">15/06/2025</p>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Planifié
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-vodrak-navy dark:text-vodrak-gold">
                      Voir toutes les échéances
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-vodrak-navy dark:text-white">Avancement des dossiers</CardTitle>
                  <CardDescription>Suivi de vos dossiers en cours</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="comptabilite">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="comptabilite">Comptabilité</TabsTrigger>
                      <TabsTrigger value="social">Social</TabsTrigger>
                      <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
                    </TabsList>
                    <TabsContent value="comptabilite">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <PieChart data={[{ name: "Comptabilité", value: 75, color: "#102C54" }]} />
                            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                              Saisie comptable - Mars 2025
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Factures clients</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Factures fournisseurs</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">80%</span>
                              </div>
                              <Progress value={80} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Relevés bancaires</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">65%</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Notes de frais</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">50%</span>
                              </div>
                              <Progress value={50} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="social">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <PieChart data={[{ name: "Social", value: 90, color: "#2E8B57" }]} />
                            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                              Gestion sociale - Avril 2025
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bulletins de paie</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">DSN</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Charges sociales</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contrats de travail</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">60%</span>
                              </div>
                              <Progress value={60} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="fiscal">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <PieChart data={[{ name: "Fiscal", value: 45, color: "#D4AF37" }]} />
                            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                              Déclarations fiscales - T1 2025
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Déclaration TVA</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">100%</span>
                              </div>
                              <Progress value={100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Acomptes IS</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">50%</span>
                              </div>
                              <Progress value={50} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CET</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">25%</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CVAE</span>
                                <span className="text-sm text-vodrak-navy dark:text-vodrak-gold">0%</span>
                              </div>
                              <Progress value={0} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-vodrak-navy dark:text-white">Documents récents</CardTitle>
                  <CardDescription>Les derniers documents partagés avec votre expert-comptable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-vodrak-navy text-white rounded-lg dark:bg-vodrak-gold dark:text-vodrak-navy">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium dark:text-white">Factures clients - Mars 2025.pdf</p>
                          <p className="text-xs text-gray-500">Ajouté le 15/04/2025 - 2.3 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-vodrak-navy text-white rounded-lg dark:bg-vodrak-gold dark:text-vodrak-navy">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium dark:text-white">Relevés bancaires - Mars 2025.pdf</p>
                          <p className="text-xs text-gray-500">Ajouté le 10/04/2025 - 1.8 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-vodrak-navy text-white rounded-lg dark:bg-vodrak-gold dark:text-vodrak-navy">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium dark:text-white">Notes de frais - Mars 2025.pdf</p>
                          <p className="text-xs text-gray-500">Ajouté le 05/04/2025 - 3.5 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex justify-between items-center">
                    <Button variant="ghost" className="text-vodrak-navy dark:text-vodrak-gold">
                      Voir tous les documents
                    </Button>
                    <Button className="bg-vodrak-navy text-white dark:bg-vodrak-gold dark:text-vodrak-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Ajouter un document
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-vodrak-navy dark:text-white">Messagerie</CardTitle>
                  <CardDescription>Communiquez avec votre expert-comptable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-52 border rounded-lg p-4 mb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm dark:text-white">Bonjour, pourriez-vous me confirmer la date limite pour la déclaration TVA du mois prochain ?</p>
                          <p className="text-xs text-gray-500 mt-1">Vous - 15/04/2025 10:30</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-vodrak-navy text-white rounded-lg p-3 max-w-[80%] dark:bg-vodrak-gold dark:text-vodrak-navy">
                          <p className="text-sm">Bonjour, la date limite est le 15 mai 2025. N'hésitez pas si vous avez d'autres questions.</p>
                          <p className="text-xs text-gray-200 mt-1 dark:text-gray-800">Marie Martin - 15/04/2025 11:15</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm dark:text-white">Merci beaucoup pour cette information !</p>
                          <p className="text-xs text-gray-500 mt-1">Vous - 15/04/2025 11:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input type="text" placeholder="Votre message..." className="flex-grow" />
                    <Button className="bg-vodrak-navy text-white dark:bg-vodrak-gold dark:text-vodrak-navy">
                      Envoyer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
