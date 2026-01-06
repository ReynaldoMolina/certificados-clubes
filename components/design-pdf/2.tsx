"use client";

import { clasesAventureros } from "@/lib/data";
import { formatCertificateDate } from "@/lib/formatters";
import { CertificatesProps } from "@/types/types";
import { Page, Text, View, Image, Document } from "@react-pdf/renderer";

const bgColors = [
  "#5ec9f1",
  "#08814e",
  "#faca24",
  "#ed9538",
  "#0085c5",
  "#704664",
];

export function Design2({ members, info, onReady }: CertificatesProps) {
  return (
    <Document onRender={onReady}>
      {members.map((member) => {
        const clase = clasesAventureros.find((c) => c.value === member.l);
        const bgColor = bgColors[Number(member.l) - 1];
        const { day, month, year } = formatCertificateDate(info.date);

        return (
          <Page
            key={member.n}
            size="LETTER"
            orientation="landscape"
            style={{
              flexDirection: "row",
              fontFamily: "Helvetica",
            }}
          >
            <View
              style={{
                margin: 7,
                alignItems: "center",
                backgroundColor: "white",
                position: "relative",
                width: "100%",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={`/2/clases/${member.l}.png`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    width: "100%",
                  }}
                />
                <Image
                  src={`/2/bottom.png`}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 0,
                    width: "100%",
                  }}
                />
                <Image
                  src={info.logo ? info.logo : "/logo-club.png"}
                  style={{
                    position: "absolute",
                    top: 233,
                    left: 30,
                    width: 145,
                    height: 145,
                  }}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 150,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 25,
                }}
              >
                <Text>CERTIFICADO DE INVESTIDURA</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 180,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 25,
                  fontFamily: "Helvetica-Bold",
                  color: bgColor,
                }}
              >
                <Text>ESTE CERTIFICADO SE OTORGA A:</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 20,
                  top: 220,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderBottom: `3px solid ${bgColor}`,
                    minWidth: 430,
                    padding: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 23 }}>{member.n}</Text>
                </View>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 270,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 16,
                  maxWidth: 430,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  Por haber cumplido satisfactoriamente los requisitos del nivel
                  de <Text style={{ color: bgColor }}>{clase?.label}</Text> del
                  Club de Aventureros.
                </Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 320,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 14,
                  maxWidth: 400,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  {`Entregado a los ${day} días del mes de ${month} del año ${year}`}
                </Text>
                <Text style={{ textAlign: "center" }}>{info.place}</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 390,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 14,
                  maxWidth: 450,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      __________________
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      Pastor del distrito
                    </Text>
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      __________________
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                      Director del club
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        );
      })}
    </Document>
  );
}
