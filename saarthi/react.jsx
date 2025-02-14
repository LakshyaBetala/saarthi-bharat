import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-4">Welcome to WebNexus</h1>
    <p className="text-lg mb-6 text-gray-400">Your gateway to Web3 knowledge.</p>
    <nav className="space-x-4">
      <Link className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600" to="/tokens">Tokens</Link>
      <Link className="px-4 py-2 bg-green-500 rounded hover:bg-green-600" to="/defi">DeFi Apps</Link>
      <Link className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600" to="/web3-info">Web3 Info</Link>
    </nav>
  </div>
);

const Tokens = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800 text-white min-h-screen">
    <h2 className="text-3xl font-bold mb-4">Understanding Tokens</h2>
    <p className="text-lg text-gray-400">Tokens are digital assets built on blockchains. They represent value and utility in the Web3 ecosystem.</p>
    <a href="https://ethereum.org/en/developers/docs/standards/tokens/" target="_blank" className="text-blue-400 hover:underline">Learn More</a>
  </motion.div>
);

const DeFi = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800 text-white min-h-screen">
    <h2 className="text-3xl font-bold mb-4">Exploring DeFi Apps</h2>
    <p className="text-lg text-gray-400">DeFi (Decentralized Finance) removes intermediaries in financial transactions.</p>
    <a href="https://defiprime.com/" target="_blank" className="text-green-400 hover:underline">Discover DeFi Apps</a>
  </motion.div>
);

const Web3Info = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-gray-800 text-white min-h-screen">
    <h2 className="text-3xl font-bold mb-4">Introduction to Web3</h2>
    <p className="text-lg text-gray-400">Web3 is the next evolution of the internet, emphasizing decentralization, blockchain, and user ownership.</p>
    <a href="https://web3.foundation/" target="_blank" className="text-purple-400 hover:underline">Learn More</a>
  </motion.div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tokens" element={<Tokens />} />
      <Route path="/defi" element={<DeFi />} />
      <Route path="/web3-info" element={<Web3Info />} />
    </Routes>
  </Router>
);

export default App;
