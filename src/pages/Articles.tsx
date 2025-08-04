
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data pour les articles
const allArticles = [
  {
    id: 1,
    title: "Éviter les erreurs fiscales en 2025",
    excerpt: "Découvrez les pièges fiscaux à éviter cette année pour optimiser votre situation fiscale.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Fiscalité",
    readTime: "5 min",
    date: "15 avril 2025",
    image: "/placeholder.svg",
    popular: true
  },
  {
    id: 2,
    title: "Les changements comptables à prévoir",
    excerpt: "Tour d'horizon des évolutions réglementaires qui impacteront votre comptabilité.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Comptabilité",
    readTime: "7 min",
    date: "10 avril 2025",
    image: "/placeholder.svg",
    popular: true
  },
  {
    id: 3,
    title: "Guide pour les auto-entrepreneurs",
    excerpt: "Conseils pratiques pour gérer efficacement votre activité d'auto-entrepreneur.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Entrepreneuriat",
    readTime: "6 min",
    date: "05 avril 2025",
    image: "/placeholder.svg",
    popular: false
  },
  {
    id: 4,
    title: "Optimiser sa trésorerie en période d'inflation",
    excerpt: "Stratégies pour préserver votre trésorerie face à l'inflation actuelle.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Finance",
    readTime: "8 min",
    date: "01 avril 2025",
    image: "/placeholder.svg",
    popular: false
  },
  {
    id: 5,
    title: "Les nouvelles obligations RSE pour les PME",
    excerpt: "Comprendre et mettre en place une stratégie RSE adaptée à votre entreprise.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Juridique",
    readTime: "10 min",
    date: "28 mars 2025",
    image: "/placeholder.svg",
    popular: true
  },
  {
    id: 6,
    title: "Comment préparer son bilan annuel",
    excerpt: "Guide étape par étape pour préparer efficacement votre bilan comptable annuel.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Comptabilité",
    readTime: "9 min",
    date: "20 mars 2025",
    image: "/placeholder.svg",
    popular: false
  }
];

// Catégories pour le filtre
const categories = ["Tous", "Fiscalité", "Comptabilité", "Juridique", "Finance", "Entrepreneuriat"];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("recent"); // "recent" or "popular"

  // Filtrer les articles en fonction de la recherche et de la catégorie
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Trier les articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "popular") {
      // Trier par popularité (ici simulé avec la propriété popular)
      return a.popular === b.popular ? 0 : a.popular ? -1 : 1;
    } else {
      // Trier par date (récent en premier)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-vodrak-navy text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Articles & Ressources</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explorez nos articles sur la comptabilité, la fiscalité et les actualités juridiques pour rester informé.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="w-full md:w-1/3">
                  <Input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={selectedCategory === category 
                        ? "bg-vodrak-navy text-white" 
                        : "text-vodrak-navy dark:text-white"}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Trier par:</span>
                  <Button
                    variant="ghost"
                    className={sortBy === "recent" ? "font-semibold text-vodrak-navy dark:text-vodrak-gold" : ""}
                    onClick={() => setSortBy("recent")}
                  >
                    Plus récent
                  </Button>
                  <Button
                    variant="ghost"
                    className={sortBy === "popular" ? "font-semibold text-vodrak-navy dark:text-vodrak-gold" : ""}
                    onClick={() => setSortBy("popular")}
                  >
                    Populaire
                  </Button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.length > 0 ? (
                sortedArticles.map((article) => (
                  <Card key={article.id} className="card-hover overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-vodrak-lightgray dark:bg-gray-700 text-vodrak-navy dark:text-white text-xs px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime} de lecture</span>
                      </div>
                      <CardTitle className="text-vodrak-navy dark:text-white text-xl">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-500 text-sm">
                        {article.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        {article.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/articles/${article.id}`} className="text-vodrak-navy dark:text-vodrak-gold font-medium hover:underline">
                        Lire l'article →
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Aucun article ne correspond à votre recherche.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination (simplifiée) */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mx-1">1</Button>
              <Button variant="outline" className="mx-1">2</Button>
              <Button variant="outline" disabled className="mx-1">...</Button>
              <Button variant="outline" className="mx-1">5</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
