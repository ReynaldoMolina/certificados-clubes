"use client";

import { clases } from "@/lib/data";
import { formatCertificateDate } from "@/lib/formatters";
import { CertificatesProps } from "@/types/types";
import { Page, Text, View, Image, Document } from "@react-pdf/renderer";

export function Design1({ members, info, onReady }: CertificatesProps) {
  return (
    <Document onRender={onReady}>
      {members.map((member) => {
        const clase = clases.find((c) => c.value === member.l);
        const { day, month, year } = formatCertificateDate(info.date);

        return (
          <Page
            key={member.n}
            size="LETTER"
            orientation="landscape"
            style={{
              flexDirection: "row",
              fontFamily: "Times-Roman",
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
                  src={`/1/clases/${member.l}.png`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Image
                  src={`/1/front/${
                    member.c === "2" ? "conquistadores" : "guias-mayores"
                  }.png`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
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
                  top: 90,
                  width: "100%",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: 40,
                }}
              >
                <Text>Certificado</Text>
                <Text>de Investidura</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 190,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 18,
                }}
              >
                <Text>este certificado se otorga a:</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 20,
                  top: 240,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    border: "1px solid black",
                    borderRadius: 5,
                    minWidth: 400,
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
                  top: 310,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 16,
                  maxWidth: 400,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  por haber cumplido satisfactoriamente los requisitos de la
                  clase
                </Text>
                <Text style={{ textAlign: "center" }}>
                  de {clase?.label} del Club de Conquistadores.
                </Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 360,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Image
                  source={`/1/botones/${member.l}.png`}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 420,
                  width: "100%",
                  alignItems: "center",
                  fontSize: 16,
                  maxWidth: 400,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  Dado a los {day} días del mes de {month} del año {year}
                </Text>
                <Text style={{ textAlign: "center" }}>{info.place}</Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: 500,
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
