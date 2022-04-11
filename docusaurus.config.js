// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const prismAdditionalLanguages = require("./prismLanguages");
const math = require("remark-math");
const katex = require("rehype-katex");
const mermaid = require("mdx-mermaid");

const mySocials = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/raphaelluethy/",
	},
	{
		label: "Github",
		href: "https://github.com/raphaelluethy",
	},
	{
		label: "Links",
		href: "https://rvgs.ch",
	},
];

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "raphaelluethy",
	tagline: "UWU", // this can be referenced in react code
	url: "https://rvgs.ch",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/logo_rl_white.png",
	organizationName: "raphaelluethy", // Usually your GitHub org/user name.
	projectName: "rvgs.ch", // Usually your repo name.

	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					remarkPlugins: [math, mermaid],
					rehypePlugins: [katex],
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/raphaelluethy/rvgs.ch/tree/main",
					admonitions: {
						customTypes: {
							example: "info",
						},
					},
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	plugins: [],
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
			type: "text/css",
			integrity:
				"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
			crossorigin: "anonymous",
		},
		{
			href: "https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css",
			type: "text/css",
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
				disableSwitch: false,
			},
			navbar: {
				title: "",
				logo: {
					alt: "Raphael Lüthy Logo",
					src: "img/logo_rvgs_black.png",
					srcDark: "img/logo_rvgs_white.png",
				},
				items: [
					{
						type: "doc",
						docId: "index",
						position: "left",
						label: "Documentation",
					},
					{ to: "projects/", label: "Projects", position: "right" },
					{ to: "about/", label: "About", position: "right" },
					{
						href: "https://github.com/raphaelluethy/rvgs.ch",
						className: "header-github-link",
						position: "right",
					},
				],
			},
			footer: {
				style: "light",
				links: [
					{
						title: "Socials",
						items: mySocials,
					},
					{
						title: "Other",
						items: [
							{
								label: "Privacy Policy",
								href: "/privacy-policy",
							},
						],
					},
				],
				copyright: `Last updated on ${new Date().toLocaleDateString(
					"de"
				)}`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: prismAdditionalLanguages,
			},
		}),
};

module.exports = config;
