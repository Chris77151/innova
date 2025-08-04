
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data pour les délais fiscaux
const delaisFiscauxData = [
  {
    id: 1,
    echeance: "15 mai 2025",
    categorie: "TVA",
    description: "Déclaration et paiement de la TVA du mois d'avril 2025",
    concernePME: true,
    concerneTPE: true,
    concerneAE: false
  },
  {
    id: 2,
    echeance: "31 mai 2025",
    categorie: "IS",
    description: "Solde de l'impôt sur les sociétés pour les entreprises clôturant au 31 décembre",
    concernePME: true,
    concerneTPE: true,
    concerneAE: false
  },
  {
    id: 3,
    echeance: "15 juin 2025",
    categorie: "URSSAF",
    description: "Déclaration sociale des indépendants - Échéance trimestrielle",
    concernePME: false,
    concerneTPE: true,
    concerneAE: true
  },
  {
    id: 4,
    echeance: "30 juin 2025",
    categorie: "CFE",
    description: "Paiement de la cotisation foncière des entreprises",
    concernePME: true,
    concerneTPE: true,
    concerneAE: true
  },
  {
    id: 5,
    echeance: "15 juillet 2025",
    categorie: "TVA",
    description: "Déclaration et paiement de la TVA du mois de juin 2025",
    concernePME: true,
    concerneTPE: true,
    concerneAE: false
  },
  {
    id: 6,
    echeance: "31 juillet 2025",
    categorie: "CVAE",
    description: "Paiement du premier acompte de CVAE pour 2025",
    concernePME: true,
    concerneTPE: false,
    concerneAE: false
  },
  {
    id: 7,
    echeance: "15 août 2025",
    categorie: "TVA",
    description: "Déclaration et paiement de la TVA du mois de juillet 2025",
    concernePME: true,
    concerneTPE: true,
    concerneAE: false
  }
];

// Types d'entreprise pour le filtrage
const typesEntreprise = ["Toutes", "PME", "TPE", "Auto-entrepreneur"];

// Catégories pour le filtrage
const categories = ["Toutes", "TVA", "IS", "URSSAF", "CFE", "CVAE"];

const DelaisFiscaux = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Toutes");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Fonctions pour les exports (simulées)
  const exportToPDF = () => {
    alert("Export PDF en cours... Cette fonctionnalité sera disponible prochainement.");
  };

  const exportToICS = () => {
    alert("Export ICS en cours... Cette fonctionnalité sera disponible prochainement.");
  };

  // Filtrer les données selon les critères de recherche
  const filteredData = delaisFiscauxData.filter((delai) => {
    const matchesSearch = 
      delai.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delai.echeance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delai.categorie.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtrer par type d'entreprise
    let matchesType = true;
    if (selectedType !== "Toutes") {
      if (selectedType === "PME") matchesType = delai.concernePME;
      else if (selectedType === "TPE") matchesType = delai.concerneTPE;
      else if (selectedType === "Auto-entrepreneur") matchesType = delai.concerneAE;
    }
    
    // Filtrer par catégorie
    const matchesCategory = selectedCategory === "Toutes" || delai.categorie === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-vodrak-navy text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Délais Fiscaux</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Consultez les échéances fiscales à venir et ne manquez plus aucune date importante.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Search and Filters */}
            <div className="mb-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <Input
                    type="text"
                    placeholder="Rechercher une échéance..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="me-4">
                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type d'entreprise</span>
                    <div className="flex flex-wrap gap-2">
                      {typesEntreprise.map((type) => (
                        <Button
                          key={type}
                          variant={selectedType === type ? "default" : "outline"}
                          size="sm"
                          className={selectedType === type 
                            ? "bg-vodrak-navy text-white" 
                            : "text-vodrak-navy dark:text-white"}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Catégorie</span>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
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
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                <Button onClick={exportToPDF} className="bg-vodrak-navy text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Exporter en PDF
                </Button>
                <Button onClick={exportToICS} variant="outline" className="border-vodrak-navy text-vodrak-navy dark:border-white dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Ajouter au calendrier (ICS)
                </Button>
              </div>
            </div>

            {/* Table des délais fiscaux */}
            <div className="rounded-lg border shadow overflow-hidden">
              <Table>
                <TableHeader className="bg-vodrak-lightgray dark:bg-gray-800">
                  <TableRow>
                    <TableHead className="font-bold text-vodrak-navy dark:text-white">Échéance</TableHead>
                    <TableHead className="font-bold text-vodrak-navy dark:text-white">Catégorie</TableHead>
                    <TableHead className="font-bold text-vodrak-navy dark:text-white">Description</TableHead>
                    <TableHead className="font-bold text-vodrak-navy dark:text-white">Concerne</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((delai) => (
                      <TableRow key={delai.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <TableCell className="font-medium">{delai.echeance}</TableCell>
                        <TableCell>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {delai.categorie}
                          </span>
                        </TableCell>
                        <TableCell>{delai.description}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {delai.concernePME && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                PME
                              </span>
                            )}
                            {delai.concerneTPE && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                TPE
                              </span>
                            )}
                            {delai.concerneAE && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                                AE
                              </span>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                        Aucune échéance ne correspond à votre recherche.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 p-6 bg-vodrak-lightgray dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-vodrak-navy dark:text-white">Note importante</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Les dates présentées sont indicatives et peuvent varier en fonction des spécificités de votre entreprise.
                Pour une information personnalisée, n'hésitez pas à contacter votre expert-comptable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DelaisFiscaux;
