import { gql } from "@apollo/client";

export const WHOAMI = gql`
  query WHOIAM {
    viewer {
      id
      name
      username
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      user {
        id
        username
        avatar {
          url
        }
        roles {
          edges {
            node {
              displayName
            }
          }
        }
        email
      }
    }
  }
`;

export const GET_TASKS = gql`
  query getAllTasks {
  hello
  getAllTasks {
    id
    title
    description
  }
}
`;

export const GET_RUTAS = gql`
  query GetRutas {
    rutas {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_RUTA = gql`
  query GetRuta($id: ID!) {
    ruta(id: $id, idType: SLUG) {
      nombre
      historia
      imagen {
        sourceUrl(size: LARGE)
      }
      acf_ruta {
        duracion
        fechaSalida
      }
      participantes {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      lugares {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      escenas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: MEDIUM)
          }
        }
      }
      mapa {
        node {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export const GET_PARTICIPANTES = gql`
  query GetParticipantes {
    participantes {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_PARTICIPANTE = gql`
  query GetParticipante($id: ID!) {
    participante(idType: SLUG, id: $id) {
      nombre
      historia
      acf_contacto {
        email
        redes
        web
      }
      imagen {
        sourceUrl(size: LARGE)
      }
      rutas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export const GET_LUGARES = gql`
  query GetLugares {
    lugares {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_LUGAR = gql`
  query GetLugar($id: ID = "") {
    lugar(idType: SLUG, id: $id) {
      id
      slug
      uri
      nombre
      historia
      imagen {
        sourceUrl(size: LARGE)
      }
      acf_contacto {
        email
        redes
        web
      }
      localidades {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
      rutas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export const GET_ESCENAS = gql`
  query GetEscenas {
    escenas {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_ESCENA = gql`
  query GetEscena($id: ID = "") {
    escena(idType: SLUG, id: $id) {
      id
      slug
      uri
      nombre
      historia
      imagen {
        sourceUrl(size: LARGE)
      }
      galeria {
        sourceUrl(size: MEDIUM)
      }
      rutas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export const GET_LOCALIDADES = gql`
  query GetLocalidades {
    localidades {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_LOCALIDAD = gql`
  query GetLocalidad($id: ID!) {
    localidad(idType: SLUG, id: $id) {
      id
      nombre
      historia
      imagen {
        sourceUrl(size: LARGE)
      }
      acf_contacto {
        email
        redes
        web
      }
      lugares {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
          rutas {
            nodes {
              id
              slug
              uri
              nombre
              historia
              imagen {
                sourceUrl(size: THUMBNAIL)
              }
            }
          }
        }
      }
    }
  }
`;

// Consulta para obtener elementos
export const GET_MAPAS = gql`
  query GetElementosMap {
    mapas {
      nodes {
        id
        slug
        uri
        nombre
        historia
        datos
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_MAPA = gql`
  query GetMapa($id: ID!) {
    mapa(idType: SLUG, id: $id) {
      id
      slug
      nombre
      historia
      datos
      imagen {
        sourceUrl(size: LARGE)
      }
      rutas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

// Mutación para crear un elemento
export const CREATE_MAPA = gql`
  mutation CreateMap(
    $nombre: String!
    $historia: String
    $datos: String
    $status: PostStatusEnum
  ) {
    createMapa(
      input: {
        nombre: $nombre
        historia: $historia
        datos: $datos
        status: $status
      }
    ) {
      mapa {
        id
        slug
        nombre
        historia
        datos
      }
    }
  }
`;

// Mutación para crear un elemento
export const UPDATE_MAPA = gql`
  mutation UpdateMapa(
    $id: ID!
    $nombre: String
    $historia: String
    $datos: String
  ) {
    updateMapa(
      input: { id: $id, nombre: $nombre, historia: $historia, datos: $datos }
    ) {
      mapa {
        id
        slug
        nombre
        historia
        datos
      }
    }
  }
`;

// Mutación para borra un elemento
export const DELETE_MAPA = gql`
  mutation DeleteMapa($id: ID!) {
    deleteMapa(input: { id: $id }) {
      mapa {
        id
        slug
        nombre
        historia
        datos
      }
    }
  }
`;

export const GET_COLABORADORES = gql`
  query GetColaboradores {
    colaboradores {
      nodes {
        id
        slug
        uri
        nombre
        historia
        imagen {
          sourceUrl(size: THUMBNAIL)
        }
      }
    }
  }
`;

export const GET_COLABORADOR = gql`
  query GetColaborador($id: ID!) {
    colaborador(idType: SLUG, id: $id) {
      id
      slug
      nombre
      historia
      datos
      imagen {
        sourceUrl(size: LARGE)
      }
      acf_contacto {
        email
        redes
        web
      }
      rutas {
        nodes {
          id
          slug
          uri
          nombre
          historia
          imagen {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($altText: String, $title: String, $filePath: String) {
    createMediaItem(
      input: {
        title: $title
        altText: $altText
        filePath: $filePath
        fileType: IMAGE_JPEG
        status: AUTO_DRAFT
      }
    ) {
      mediaItem {
        uri
        sourceUrl(size: LARGE)
        mediaItemUrl
        dataUrl
      }
    }
  }
`;

export const MUTATION_IMAGE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      success
    }
  }
`;
