const propiedades = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: 5000,
    fumar: false,
    mascotas: false,
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    venta: true,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: 1200,
    fumar: true,
    mascotas: true,
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    venta: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 4500,
    fumar: false,
    mascotas: true,
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    venta: true,
  },
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: 5000,
    fumar: false,
    mascotas: false,
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    venta: true,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: 1200,
    fumar: true,
    mascotas: true,
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    venta: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 4500,
    fumar: false,
    mascotas: true,
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    venta: true,
  },
  {
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumar: false,
    mascotas: true,
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    venta: false,
  },
  {
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 2500,
    fumar: true,
    mascotas: true,
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    venta: false,
  },
  {
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2200,
    fumar: false,
    mascotas: false,
    imagen:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    venta: false,
  },
  {
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumar: false,
    mascotas: true,
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    venta: false,
  },
  {
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 2500,
    fumar: true,
    mascotas: true,
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    venta: false,
  },
  {
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2200,
    fumar: false,
    mascotas: false,
    imagen:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    venta: false,
  },
];

function mostrarPropiedades() {
  const sPath = window.location.pathname;
  const sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
  let seccionVenta = "";
  let seccionAlquiler = "";
  if (sPage === "propiedades_venta.html" || sPage === "index.html") {
    seccionVenta = document.getElementById("venta").querySelector(".row");
  }
  if (sPage === "propiedades_alquiler.html" || sPage === "index.html") {
    seccionAlquiler = document.getElementById("alquiler").querySelector(".row");
  }
  let contador_venta = 0;
  let contador_alquiler = 0;

  function admiteMascotas(valor) {
    let texto = "No se permiten Mascotas";
    if (valor) {
      texto = "Mascotas Permitidas";
    }
    return texto;
  }
  function fumadores(valor) {
    let texto = "No se permite fumar";
    if (valor) {
      texto = "Permitido fumar";
    }
    return texto;
  }

  propiedades.forEach((propiedad) => {
    let html = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.titulo}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  ${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>`;
    if (propiedad.fumar) {
      html += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
    } else {
      html += `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
    }
    if (propiedad.mascotas) {
      html += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
    } else {
      html += `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;
    }
    html += `</div>
            </div>
          </div>
        `;

    if (propiedad.venta) {
      if (sPage === "propiedades_venta.html" || sPage === "index.html") {
        if (sPage === "propiedades_venta.html") {
          seccionVenta.innerHTML += html;
        } else {
          if (contador_venta < 3) {
            seccionVenta.innerHTML += html;
            contador_venta += 1;
          }
        }
      }
    } else {
      if (sPage === "propiedades_alquiler.html" || sPage === "index.html") {
        if (sPage === "propiedades_alquiler.html") {
          seccionAlquiler.innerHTML += html;
        } else {
          if (contador_alquiler < 3) {
            seccionAlquiler.innerHTML += html;
            contador_alquiler += 1;
          }
        }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", mostrarPropiedades);
