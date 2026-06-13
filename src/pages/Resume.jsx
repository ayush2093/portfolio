import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import resumePdf from "./resume.pdf";

const Resume = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-8 animate-fade-in">
					<h1 className="text-5xl md:text-6xl font-bold mb-4">
						My <span className="gradient-text">Resume</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						View my professional experience, education, and skills
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4 mb-6">
					<Button 
						asChild 
						size="lg"
						className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
					>
						<a href={resumePdf} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="w-4 h-4 mr-2" />
							Open in New Tab
						</a>
					</Button>
					<Button 
						asChild 
						variant="outline" 
						size="lg"
						className="shadow-md hover:shadow-lg transition-all"
					>
						<a href={resumePdf} download="Ayush_Singh_Resume.pdf">
							<Download className="w-4 h-4 mr-2" />
							Download PDF
						</a>
					</Button>
				</div>

				<div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-2 shadow-2xl">
					<div className="w-full bg-background rounded-xl overflow-hidden" style={{ height: "85vh" }}>
						<iframe 
							src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=1`}
							title="Resume" 
							className="w-full h-full border-0"
							style={{ minHeight: "600px" }}
						/>
					</div>
				</div>

				<p className="text-center text-sm text-muted-foreground mt-4">
					If the resume doesn't display properly, please use the "Open in New Tab" button above
				</p>
			</div>
		</div>
	);
};

export default Resume;
