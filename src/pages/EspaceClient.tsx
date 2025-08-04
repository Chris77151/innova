
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EspaceClient = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerCompany, setRegisterCompany] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion
    alert(`Connexion en cours avec: ${loginEmail}`);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription
    alert(`Inscription en cours pour: ${registerEmail} - ${registerCompany}`);
  };

  const handleForgotPassword = () => {
    // Logique de récupération de mot de passe
    alert("Un email de réinitialisation va vous être envoyé si l'adresse est reconnue.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-vodrak-navy text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Espace Client</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Accédez à votre espace personnel pour suivre vos dossiers et échanger avec nos experts.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Connexion</TabsTrigger>
                  <TabsTrigger value="register">Inscription</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-vodrak-navy dark:text-white text-2xl">Connectez-vous</CardTitle>
                      <CardDescription>
                        Accédez à votre tableau de bord personnel
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Adresse email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="nom@entreprise.com"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password">Mot de passe</Label>
                            <button
                              type="button"
                              className="text-sm text-vodrak-navy dark:text-vodrak-gold hover:underline"
                              onClick={handleForgotPassword}
                            >
                              Mot de passe oublié ?
                            </button>
                          </div>
                          <Input
                            id="password"
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-vodrak-navy text-white">
                          Se connecter
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="register">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-vodrak-navy dark:text-white text-2xl">Créer un compte</CardTitle>
                      <CardDescription>
                        Inscrivez-vous pour accéder à nos services en ligne
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-name">Nom complet</Label>
                          <Input
                            id="register-name"
                            type="text"
                            placeholder="Jean Dupont"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-company">Entreprise</Label>
                          <Input
                            id="register-company"
                            type="text"
                            placeholder="Nom de votre entreprise"
                            value={registerCompany}
                            onChange={(e) => setRegisterCompany(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Adresse email professionnelle</Label>
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="nom@entreprise.com"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Mot de passe</Label>
                          <Input
                            id="register-password"
                            type="password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-vodrak-navy text-white">
                          Créer un compte
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-12 bg-vodrak-lightgray dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Les avantages de l'espace client</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Découvrez tous les services disponibles dans votre espace personnel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-vodrak-navy dark:text-vodrak-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-center text-vodrak-navy dark:text-white">Suivi de vos dossiers</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Visualisez l'état d'avancement de vos dossiers comptables, fiscaux et sociaux en temps réel.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-vodrak-navy dark:text-vodrak-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <CardTitle className="text-center text-vodrak-navy dark:text-white">Partage de documents</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Déposez et récupérez vos documents comptables dans un espace sécurisé accessible 24h/24.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-vodrak-navy dark:text-vodrak-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-center text-vodrak-navy dark:text-white">Messagerie intégrée</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Communiquez directement avec votre expert-comptable et suivez l'historique de vos échanges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EspaceClient;
