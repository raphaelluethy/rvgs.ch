import React from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Home() {
	return (
		<Layout title="Home" description="The homepage of rvgs.ch">
			<main>
				<Container>
					<NameSection>
						<p>This is the Very Good Documentation Site</p>
						<Name>Raphael Lüthy</Name>
						<h2>
							Nerd - Software Engineer - Computer Science Student
							- Gamer
						</h2>
					</NameSection>
				</Container>
			</main>
		</Layout>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	min-height: calc(100vh - 60px);
`;

const Name = styled.h1`
	font-size: 3rem;
	color: var(--ifm-color-primary);
`;

const NameSection = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10%;
`;
