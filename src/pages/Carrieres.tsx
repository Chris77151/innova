import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, FileText, Users, Briefcase } from "lucide-react";

const Carrieres = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    poste: "",
    experience: "",
    motivation: "",
    cv: null as File | null,
    lettreMotivation: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    toast({
      title: "Candidature envoyée !",
      description: "Nous avons bien reçu votre candidature. Notre équipe vous recontactera sous peu.",
    });
    
    // Reset form
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      poste: "",
      experience: "",
      motivation: "",
      cv: null,
      lettreMotivation: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-vodrak-navy dark:text-white mb-6">
            Rejoignez Notre Équipe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Chez Vodrak Comptable, nous recherchons des talents passionnés pour nous accompagner 
            dans notre mission d'excellence en comptabilité et conseil juridique.
          </p>
        </div>

        {/* Valeurs et Avantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Briefcase className="w-12 h-12 text-vodrak-gold mx-auto mb-4" />
              <CardTitle className="text-vodrak-navy dark:text-white">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Nous privilégions la qualité et l'expertise dans tous nos projets.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-vodrak-gold mx-auto mb-4" />
              <CardTitle className="text-vodrak-navy dark:text-white">Équipe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Rejoignez une équipe soudée et bienveillante dans un environnement stimulant.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <FileText className="w-12 h-12 text-vodrak-gold mx-auto mb-4" />
              <CardTitle className="text-vodrak-navy dark:text-white">Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Développez vos compétences avec nos programmes de formation continue.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire de candidature */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-vodrak-navy dark:text-white">
              Candidature Spontanée
            </CardTitle>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Remplissez ce formulaire pour nous faire part de votre intérêt
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations personnelles */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange('telephone', e.target.value)}
                  />
                </div>
              </div>

              {/* Informations professionnelles */}
              <div>
                <Label htmlFor="poste">Poste souhaité</Label>
                <Select value={formData.poste} onValueChange={(value) => handleInputChange('poste', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un poste" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comptable">Comptable</SelectItem>
                    <SelectItem value="assistant-comptable">Assistant(e) Comptable</SelectItem>
                    <SelectItem value="expert-comptable">Expert-Comptable</SelectItem>
                    <SelectItem value="juriste">Juriste</SelectItem>
                    <SelectItem value="conseiller-fiscal">Conseiller Fiscal</SelectItem>
                    <SelectItem value="secretaire">Secrétaire</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Années d'expérience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debutant">Débutant (0-2 ans)</SelectItem>
                    <SelectItem value="junior">Junior (2-5 ans)</SelectItem>
                    <SelectItem value="senior">Senior (5-10 ans)</SelectItem>
                    <SelectItem value="expert">Expert (10+ ans)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="motivation">Lettre de motivation *</Label>
                <Textarea
                  id="motivation"
                  placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre notre équipe..."
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  rows={5}
                  required
                />
              </div>

              {/* Upload de fichiers */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cv">CV (PDF, Word) *</Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange('cv', e.target.files?.[0] || null)}
                      className="hidden"
                      required
                    />
                    <Label htmlFor="cv" className="cursor-pointer text-vodrak-navy dark:text-vodrak-gold hover:underline">
                      {formData.cv ? formData.cv.name : "Cliquez pour télécharger votre CV"}
                    </Label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="lettreMotivation">Lettre de motivation (PDF, Word)</Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <Input
                      id="lettreMotivation"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange('lettreMotivation', e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <Label htmlFor="lettreMotivation" className="cursor-pointer text-vodrak-navy dark:text-vodrak-gold hover:underline">
                      {formData.lettreMotivation ? formData.lettreMotivation.name : "Cliquez pour télécharger (optionnel)"}
                    </Label>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-vodrak-navy hover:bg-opacity-90 text-white px-8 py-3 text-lg"
                >
                  Envoyer ma candidature
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact RH */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-montserrat font-semibold text-vodrak-navy dark:text-white mb-4">
            Questions sur nos opportunités ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Contactez notre service RH pour plus d'informations
          </p>
          <a 
            href="mailto:rh@vodrakcomptable.com" 
            className="text-vodrak-gold hover:underline font-medium"
          >
            rh@vodrakcomptable.com
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Carrieres;