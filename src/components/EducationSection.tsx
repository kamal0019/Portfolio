import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      institution: "JECRC University",
      degree: "B.Tech (Computer Science Engineering)",
      period: "2022 - 2026",
      gpa: "8.6 CGPA",
      relevant: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Object-Oriented Programming",
        "Operating Systems"
      ],
      achievements: [
        "Maintained 8.6 CGPA throughout the program",
        "Active participant in technical projects",
        "Strong academic performance in core subjects"
      ]
    },
    {
      institution: "Impulse Sr.Sec. School",
      degree: "Senior Secondary School",
      period: "2021 - 2022",
      gpa: "94%",
      relevant: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ],
      achievements: [
        "Achieved 94% in board examinations",
        "Strong foundation in science and mathematics",
        "Excellent academic performance"
      ]
    },
    {
      institution: "Wisdom Academy",
      degree: "Secondary School",
      period: "2019 - 2020",
      gpa: "85%",
      relevant: [
        "Core academic subjects",
        "Mathematics",
        "Science fundamentals"
      ],
      achievements: [
        "Achieved 85% in board examinations",
        "Consistent academic performance",
        "Strong foundational knowledge"
      ]
    }
  ];

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL (Govt. of India)",
      date: "2024",
      description: "Learned Python for data handling, analysis, and basic machine learning applications"
    },
    {
      title: "Database Management",
      issuer: "NPTEL (Govt. of India)",
      date: "2024",
      description: "Acquired practical knowledge of SQL, database design, normalization, and management"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a strong foundation through academic excellence and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-slide-up">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {edu.institution}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-muted-foreground font-medium">{edu.degree}</p>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-primary text-primary">
                          GPA: {edu.gpa}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-primary" />
                        Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Award className="mr-3 text-primary" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                 {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                      {cert.description && (
                        <p className="text-muted-foreground text-xs mt-2">
                          {cert.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;