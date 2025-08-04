
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data pour les services
const services = [
  {
    id: "comptabilite",
    title: "Comptabilité",
    description: "Nous prenons en charge votre comptabilité pour vous permettre de vous concentrer sur votre cœur de métier.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-vodrak-navy dark:text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "fiscalite",
    title: "Fiscalité",
    description: "Optimisez votre fiscalité tout en respectant les obligations légales avec nos conseils personnalisés.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-vodrak-navy dark:text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "juridique",
    title: "Conseil juridique",
    description: "Bénéficiez d'un accompagnement juridique pour sécuriser vos opérations et prendre les bonnes décisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-vodrak-navy dark:text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "social",
    title: "Gestion sociale",
    description: "Gérez efficacement vos ressources humaines avec nos solutions de paie et notre expertise en droit social.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-vodrak-navy dark:text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
      </svg>
    )
  }
];

// Mock data pour les avantages
const advantages = [
  {
    title: "Expertise",
    description: "Plus de 15 ans d'expérience dans le domaine comptable et fiscal."
  },
  {
    title: "Réactivité",
    description: "Une équipe réactive pour répondre rapidement à vos besoins."
  },
  {
    title: "Sur-mesure",
    description: "Des solutions personnalisées adaptées à votre secteur d'activité."
  },
  {
    title: "Sécurité",
    description: "Vos données sont protégées avec les normes de sécurité les plus élevées."
  }
];

// Mock data pour les articles
const featuredArticles = [
  {
    id: 1,
    title: "Éviter les erreurs fiscales en 2025",
    excerpt: "Découvrez les pièges fiscaux à éviter cette année pour optimiser votre situation fiscale.",
    readTime: "5 min",
    date: "15 avril 2025",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Les changements comptables à prévoir",
    excerpt: "Tour d'horizon des évolutions réglementaires qui impacteront votre comptabilité.",
    readTime: "7 min",
    date: "10 avril 2025",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Guide pour les auto-entrepreneurs",
    excerpt: "Conseils pratiques pour gérer efficacement votre activité d'auto-entrepreneur.",
    readTime: "6 min",
    date: "05 avril 2025",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleAuditRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour traiter la demande d'audit
    alert(`Demande d'audit envoyée pour: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vodrak-navy to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat animate-fade-in">
                Expertise comptable et juridique d'excellence
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Simplifiez votre gestion, concrétisez vos ambitions.
              </p>
              <form onSubmit={handleAuditRequest} className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel"
                  className="px-4 py-3 rounded-lg w-full md:w-auto md:flex-grow max-w-md text-black"
                  required
                />
                <Button type="submit" className="bg-vodrak-gold hover:bg-opacity-90 text-vodrak-navy font-bold px-6 py-3">
                  Obtenir un audit gratuit
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Nos Services</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez l'ensemble de nos services comptables et juridiques pour vous accompagner dans votre développement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card key={service.id} id={service.id} className="card-hover bg-white dark:bg-gray-800">
                  <CardHeader className="text-center pt-6">
                    <div className="mx-auto mb-4">{service.icon}</div>
                    <CardTitle className="text-vodrak-navy dark:text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" className="border-vodrak-navy text-vodrak-navy hover:bg-vodrak-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-vodrak-navy transition-all duration-300">
                      En savoir plus
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-vodrak-lightgray dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Pourquoi Nous Choisir</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Nos engagements pour vous offrir un service de qualité supérieure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-vodrak-navy dark:text-white">{advantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Articles Récents</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Restez informé des dernières actualités comptables et juridiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="card-hover overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      <span>{article.date}</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <CardTitle className="text-vodrak-navy dark:text-white text-xl">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/articles/${article.id}`} className="text-vodrak-navy dark:text-vodrak-gold font-medium hover:underline">
                      Lire l'article →
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/articles">
                <Button variant="outline" className="border-vodrak-navy text-vodrak-navy hover:bg-vodrak-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-vodrak-navy">
                  Voir tous les articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-vodrak-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Prêt à optimiser votre gestion comptable?</h2>
              <p className="text-xl mb-8">
                Contactez-nous dès aujourd'hui pour un accompagnement personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-vodrak-green hover:bg-gray-100">
                  Nous contacter
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vodrak-green">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
