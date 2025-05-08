import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um filme (film) como propriedade
export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem do filme (pôster vertical) */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações do filme */}
      <View style={styles.info}>
        {/* Título principal em inglês */}
        <Text style={styles.title}>{film.name ?? "Nome não disponível"}</Text>

        {/* Título original em japonês */}
        <Text style={styles.text}>
          🏠 House: {film.house ?? "Casa nao disponivel"}
        </Text>

        {/* Título romanizado (em alfabeto latino) */}
        <Text style={styles.text}>
          👩/👨 Gender:{" "}
          {film.gender === "male"
            ? "Homem"
            : film.gender === "female"
            ? "Mulher"
            : "Genero não disponível"}
        </Text>
        {/* Ator, Cor de Cabelo e cor do Olho */}
        <Text style={styles.text}>
          🧑‍🎤 Actor: {film.actor ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          👤 Hair Color:{" "}
          {film.hairColour === "black"
            ? "Preto"
            : film.hairColour === "brown"
            ? "Castanho"
            : film.hairColour === "blonde"
            ? "Loiro/Loira"
            : "Não informado"}
        </Text>
        {/* Nota no Rotten Tomatoes */}
        <Text style={styles.text}>
          👁️ Eyes Color:{" "}
          {film.eyeColour === "green"
            ? "Verde"
            : film.eyeColour === "brown"
            ? "Marrom"
            : film.eyeColour === "blue"
            ? "Azul"
            : film.eyeColour === "grey"
            ? "Cinza"
            : film.eyeColour === "black"
            ? "Preto"
            : "Não informado"}
        </Text>

        {/* Data de Nascimento e Especie */}
        <Text style={styles.text}>
          📅 Birth Day: {film.dateOfBirth ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          🤖 species:{" "}
          {film.species === "human"
            ? "Humano"
            : film.species === "werewolf"
            ? "Lobisomen"
            : film.epecies == "half-giant"
            ? "Meio-Gigante"
            : film.epecies == "toad"
            ? "Sapo"
            : film.epecies == "dog"
            ? "Cachorro"
            : film.epecies == "owl"
            ? "Coruja"
            : film.epecies == "ghost"
            ? "Fantasma"
            : "Outros"}
        </Text>
        <Text style={styles.text}>
          🧬 Alive:{" "}
          {film.alive === true
            ? "Vivo/Viva"
            : film.alive === false
            ? "Morto/Morta"
            : "Não Informado o paradeiro"}
        </Text>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%",
    height: screenWidth * 1, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 4,
    fontStyle: "italic",
  },
  text_names: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  text: {
    fontSize: 18,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
});
