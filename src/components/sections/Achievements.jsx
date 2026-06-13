import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Flame, BrainCircuit, ExternalLink, BadgeCheck, ChevronDown } from "lucide-react";
import cipherschoolsMern from "@/assets/images/cipherschools-mern.png";
import googleNetworking from "@/assets/images/google-networking.png";
import oracleAiFoundations from "@/assets/images/oracle-ai-foundations.png";
import oracleDataPlatform from "@/assets/images/oracle-data-platform.png";
import nptelPrivacySecurity from "@/assets/images/nptel-privacy-security.png";

const groupVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const Achievements = () => {
  const [showCertificates, setShowCertificates] = useState(false);

	const leetCodeActivity = [
		{
			icon: <Flame className="w-5 h-5 text-orange-300" />,
			label: "Consistency",
			value: "Daily problem-solving practice",
		},
		{
			icon: <Trophy className="w-5 h-5 text-amber-300" />,
			label: "Contests",
			value: "Regular participation in coding contests",
		},
		{
			icon: <BrainCircuit className="w-5 h-5 text-cyan-300" />,
			label: "Focus Areas",
			value: "Arrays, Graphs, Dynamic Programming",
		},
	];

	const certificates = [
		{
			title: "Full-Stack Development (MERN Stack Summer Training)",
			issuer: "CipherSchools",
			year: "2025",
			link: "/certificates/cipherschools-mern.pdf",
			preview: cipherschoolsMern,
			featured: true,
		},
		{
			title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
			issuer: "Oracle University",
			year: "2026",
			link: "/certificates/oracle-ai-foundations.pdf",
			preview: oracleAiFoundations,
			featured: false,
		},
		{
			title: "Oracle Data Platform 2025 Certified Foundations Associate",
			issuer: "Oracle University",
			year: "2026",
			link: "/certificates/oracle-data-platform.pdf",
			preview: oracleDataPlatform,
			featured: false,
		},
		{
			title: "The Bits and Bytes of Computer Networking",
			issuer: "Google (Coursera)",
			year: "2024",
			link: "/certificates/google-networking.pdf",
			preview: googleNetworking,
			featured: false,
		},
		{
			title: "Privacy and Security in Online Social Media",
			issuer: "NPTEL",
			year: "2025",
			link: "/certificates/nptel-privacy-security.pdf",
			preview: nptelPrivacySecurity,
			featured: false,
		},
	];

	return (
		<section id="achievements" className="relative py-20 sm:py-24 overflow-hidden">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-12 left-0 h-56 w-56 rounded-full bg-secondary/12 blur-3xl" />
				<div className="absolute -bottom-12 right-0 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
			</div>

			<div className="section-shell relative">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="text-center mb-10 sm:mb-12"
				>
					<span className="section-kicker mb-4">Highlights</span>
					<h2 className="section-title">
						LeetCode and <span className="gradient-text">Certificates</span>
					</h2>
					<p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
						Coding momentum and validated learning in one place.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 xl:grid-cols-5 gap-6"
					variants={groupVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.15 }}
				>
					<motion.div variants={itemVariants} className="xl:col-span-2">
						<Card className="relative h-full glass-effect rounded-2xl p-6 sm:p-7 border-border/80 hover:border-primary/50 transition-colors duration-300">
							<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

							<div className="flex items-start justify-between mb-6">
								<div>
									<p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">LeetCode Activity</p>
									<h3 className="text-xl sm:text-2xl font-semibold">Problem Solving Journey</h3>
								</div>
								<div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/35 flex items-center justify-center">
									<Trophy className="w-6 h-6 text-amber-300" />
								</div>
							</div>

							<motion.div
								className="space-y-3 mb-6"
								variants={groupVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
							>
								{leetCodeActivity.map((item) => (
									<motion.div
										key={item.label}
										variants={itemVariants}
										whileHover={{ x: 4 }}
										className="rounded-xl border border-border/70 bg-card/50 px-4 py-3 flex items-start gap-3 hover:border-primary/40 transition-colors"
									>
										<div className="w-9 h-9 rounded-lg bg-background/80 border border-border/70 flex items-center justify-center flex-shrink-0">
											{item.icon}
										</div>
										<div>
											<p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
											<p className="text-sm sm:text-base text-foreground/90 leading-snug">{item.value}</p>
										</div>
									</motion.div>
								))}
							</motion.div>

							<Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90">
								<a href="https://leetcode.com/u/Ayush20931781/" target="_blank" rel="noopener noreferrer">
									<ExternalLink className="w-4 h-4 mr-2" />
									View LeetCode Profile
								</a>
							</Button>
						</Card>
					</motion.div>

					<motion.div variants={itemVariants} className="xl:col-span-3">
						<Card className="relative glass-effect rounded-2xl p-5 sm:p-6 border-border/80 hover:border-primary/45 transition-all duration-300">
							<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

							<div className="flex items-start justify-between gap-3 mb-4">
								<div className="flex items-center gap-3">
									<div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
										<Award className="w-5 h-5 text-cyan-300" />
									</div>
									<div>
										<h3 className="text-lg sm:text-xl font-semibold">Certificates</h3>
										<p className="text-sm text-muted-foreground">Verified achievements and professional learning</p>
									</div>
								</div>
							</div>

							<Button
								variant="outline"
								onClick={() => setShowCertificates((prev) => !prev)}
								className="rounded-lg bg-card/50 border-border/80 w-full sm:w-auto"
							>
								<span>{showCertificates ? "Hide Certificates" : "View Certificates"}</span>
								<ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${showCertificates ? "rotate-180" : "rotate-0"}`} />
							</Button>

							<AnimatePresence initial={false}>
								{showCertificates && (
									<motion.div
										initial={{ opacity: 0, height: 0, marginTop: 0 }}
										animate={{ opacity: 1, height: "auto", marginTop: 16 }}
										exit={{ opacity: 0, height: 0, marginTop: 0 }}
										transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										className="overflow-hidden"
									>
										<motion.div
											variants={groupVariants}
											initial="hidden"
											animate="visible"
											className="grid grid-cols-1 sm:grid-cols-2 gap-4"
										>
											{certificates.map((certificate) => (
												<motion.div
													key={certificate.title}
													variants={itemVariants}
													whileHover={{ y: -5 }}
													className={certificate.featured ? "sm:col-span-2" : ""}
												>
													<div className="rounded-xl border border-border/75 bg-card/50 p-4">
														{certificate.preview ? (
															<div className="mb-3 overflow-hidden rounded-lg border border-border/70">
																<img
																	src={certificate.preview}
																	alt={certificate.title}
																	className="w-full h-32 object-cover"
																	loading="lazy"
																/>
															</div>
														) : (
															<div className="mb-3 rounded-lg border border-border/70 bg-background/60 h-32 flex items-center justify-center text-sm text-muted-foreground">
																 Certificate
															</div>
														)}

														<div className="flex items-start justify-between gap-3 mb-3">
															<div className="w-9 h-9 rounded-lg bg-background/80 border border-border/70 flex items-center justify-center flex-shrink-0">
																{certificate.featured ? (
																	<Award className="w-4 h-4 text-cyan-300" />
																) : (
																	<BadgeCheck className="w-4 h-4 text-cyan-300" />
																)}
															</div>
															<span className="text-[11px] rounded-full px-2.5 py-1 border border-border/80 bg-card/70 text-muted-foreground">
																{certificate.year}
															</span>
														</div>

														<h4 className="text-sm sm:text-base font-semibold mb-1 leading-snug">{certificate.title}</h4>
														<p className="text-xs sm:text-sm text-muted-foreground mb-3">Issued by {certificate.issuer}</p>

														<Button asChild variant="outline" size="sm" className="rounded-lg bg-card/50 border-border/80 w-full sm:w-auto">
															<a href={certificate.link} target="_blank" rel="noopener noreferrer">
																<ExternalLink className="w-4 h-4 mr-2" />
																Open Certificate
															</a>
														</Button>
													</div>
												</motion.div>
											))}
										</motion.div>
									</motion.div>
								)}
							</AnimatePresence>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default memo(Achievements);
