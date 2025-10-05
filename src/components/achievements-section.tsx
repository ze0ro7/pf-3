
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Award, Medal } from "lucide-react";

const hackathonAchievements = [
  {
    title: "WebCode || Avishkaar",
    position: "2nd Position",
    year: "2024",
    description: "ClipSync is a video messaging platform designed for asynchronous communication, particularly in work environments.",
    tech: ["React", "Node.js", "WebSockets", "OpenAI API","Express.js","Socket.io","AWS","Voice Flow","Cloudinary","Next.js","Tailwind","Shadcn","Typescript","Prisma","Neon"]
  },
  {
    title: "Code Indrome || Avishkaar",
    position: "1st Position",
    year: "2024",
    description: "NatureSphere a website created for the Code Indrome event, aimed at raising awareness about environmental degradation",
    tech: ["HTML", "Firebase", "CSS","JS","PhonePe API","NEWS API","Node.js","Chart.js","Bootstrap"]
  },
  {
    title: "Code Spark || Avishkaar",
    position: "2nd Position",
    year: "2024",
    description: "Competitive Programming event at Annual tech fest of MNNIT",
    tech: ["DSA","CP"]
  },
];

const codingProfiles = [
  {
    platform: "Codeforces",
    rating: 1635,
    solved: 250,
    rank: "11k",
    tier: "Expert"
  },
    {
    platform: "Codechef",
    rating: 2156,
    solved: 56,
    rank: "645",
    tier: "5★Star"
  },
      {
    platform: "LeetCode",
    rating: 1810,
    solved: 420,
    rank: "50k",
    tier: "Knight(soon)"
  }
];

// Helper function for rating badge colors
const getRatingColor = (platform: string, rating: number): string => {
  if (platform === "LeetCode") {
    if (rating > 2100) return "bg-violet-600 text-white";
    if (rating > 1900) return "bg-yellow-500 text-black";
    if (rating > 1700) return "bg-green-500 text-white";
    return "bg-green-500 text-white";
  }
  
  if (platform === "Codeforces") {
    if (rating > 2100) return "bg-[#ff8c00] text-white"; // Master
    if (rating > 1900) return "bg-violet-500 text-white"; // Candidate Master
    if (rating > 1600) return "bg-blue-500 text-white"; // Expert
    return "bg-cyan-500 text-white"; // Specialist
  }
  
  if (platform === "CodeChef") {
    if (rating > 2000) return "bg-blue-500 text-white"; // 6 star
    if (rating > 1800) return "bg-yellow-500 text-black"; // 5 star
    return "bg-blue-500 text-white"; // 4 star
  }
  return "bg-yellow-500 text-white";
};

// Helper to get the right icon
const getHackathonIcon = (position: string) => {
  if (position.includes("1st") || position.includes("Grand")) {
    return <Trophy className="h-6 w-6 text-yellow-500" />;
  } else if (position.includes("2nd")) {
    return <Award className="h-6 w-6 text-gray-400" />;
  } else {
    return <Medal className="h-6 w-6 text-amber-700" />;
  }
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/30 px-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hackathon victories and competitive programming rankings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Hackathon Victories</h3>
            <div className="space-y-6">
              {hackathonAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {getHackathonIcon(achievement.position)}
                            {achievement.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {achievement.year} - {achievement.position}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-background">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Competitive Programming</h3>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      {/* <TableHead>Handle</TableHead> */}
                      <TableHead>Rating</TableHead>
                      <TableHead className="hidden sm:table-cell">Solved</TableHead>
                      <TableHead className="hidden md:table-cell">Rank</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {codingProfiles.map((profile, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{profile.platform}</TableCell>
                        {/* <TableCell>{profile.handle}</TableCell> */}
                        <TableCell>
                          <Badge className={getRatingColor(profile.platform, profile.rating)}>
                            {profile.rating} ({profile.tier})
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{profile.solved} problems</TableCell>
                        <TableCell className="hidden md:table-cell">{profile.rank}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="glass p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Top 7.24% Worldwide (LeetCode Data)</h4>
                    <p className="text-sm text-muted-foreground">
                     Try to reach the top 0.01% of programmers in terms of skill, problem-solving ability
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
