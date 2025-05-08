// Importa o React
import React from "react";

// Importa componentes visuais do React Native
import { View, StyleSheet, Dimensions } from "react-native";

// Importa o MotiView, que permite criar animações com facilidade
import { MotiView } from "moti";

// Importa Easing para deixar a animação mais suave
import { Easing } from "react-native-reanimated";

// Pega a largura da tela para definir a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// Componente visual que simula um card de carregamento
export default function SkeletonCard() {
  return (
    // MotiView é como um View animado
    <MotiView
      from={{ opacity: 0.3 }} // Começa com 30% de opacidade
      animate={{ opacity: 1 }} // Vai até 100% de opacidade
      transition={{
        loop: true,                  // Faz a animação se repetir infinitamente
        type: "timing",              // Usa uma animação com tempo fixo
        duration: 800,               // Dura 0,8 segundo por ciclo
        delay: 300,                  // Espera 0,3s antes de começar
        easing: Easing.inOut(Easing.ease), // Animação suave de entrada/saída
      }}
      style={styles.card} // Aplica o estilo de cartão
    >
      {/* Simula a imagem do filme com uma caixa azul clara */}
      <View style={styles.image} />

      {/* Simula uma linha de texto com um bloco claro */}
      <View style={styles.textBlock} />

      {/* Simula uma linha menor com 60% da largura */}
      <View style={[styles.textBlock, { width: "60%" }]} />
    </MotiView>
  );
}

// Estilo dos elementos do skeleton
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#081f5c", // Fundo azul escuro do card
    borderRadius: 16,           // Cantos arredondados
    marginBottom: 20,           // Espaço entre os cards
    padding: 16,                // Espaço interno

    // Sombra para destacar o card (Android e iOS)
    shadowColor: "#334eac",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",                 // Ocupa toda a largura
    height: screenWidth * 0.6,     // Altura proporcional à tela
    backgroundColor: "#7096d1",    // Cor clara para indicar carregando
    borderRadius: 12,              // Cantos arredondados
  },
  textBlock: {
    height: 16,                  // Altura da "linha de texto"
    backgroundColor: "#e7f1ff",  // Cor clara para o bloco
    borderRadius: 8,             // Cantos arredondados
    marginTop: 12,               // Espaço entre os blocos
    width: "80%",                // Largura padrão (80%)
  },
});

