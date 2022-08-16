# Esquema emprendimiento y dimensiones impactos v.1.
{
 # Atributos basicos
 'nombre_emprendimiento': str,
 'tipo_emprendimiento': str, # 1. spin-offs udea, 2. instituciones academicas sup  , 3 comunidad emprenderora genereal valle Aburra, regiones
 'plataforma': str,          # nombre del proyecto o convenio que implementa alguna tipologia de gestión del emprendimiento;
 'region': str,              # region antioquia
 'fase': str,                # pre-incubacion, incubacion, pos-incubacion, 
 'vigencia':date,            # año en que se realiza el acompañamiento
 'integrantes_emprendimiento':[{'nombre': str, # 
                                'genero': str,
                                'nivel_academico': str,
                                'institucion': str,
                                'profesion': str},
                                ...,
                                {N}
                            ], 
 
 # Permanencia empresarial
    'razon_social':str,
    'nit':int,
    'fecha_matricula':date,
    'fecha_disolucion':date,
    'fechas_renovación':list(date), # Esto deberia estar incluido en una lista, paa tener el historico de renovaciones ? 
    'fecha_formalizacion':date,
    'tipo_sociedad':str,
    'tamaño':str,
    'sector_economico':str,
    'actividades_economicas':['nombre actividad 1', 'nombre actividad 2', ... N],
    'ingresos':int,

 # Comercio internacional

 'exportaciones':[{'año':date,
                 'cant_export':int,
                 'paises_destino':list(str),
                 'valor_importaciones':int(usd),
                 'cap_arancel_export':list}]
 
 'importaciones': [{'año':date,
                  'cant_import':int,
                  'paises_origen':list(str),
                  'valor_import':int(usd),
                  'cap_arancel_import':list(str)]
 
 # Contribucion economica territorio

 'empleos':[{'año':date,
             'num_empleos':int,
             'empleos_directos':int,
             'empleos_indirectos':int,
             'sum_costo_empleos':int
             }...{N}]

 'estados_financieros':[{'año':date,
                         'activos':int,
                         'ingresos':int,
                         'impuesto':int # impuestos pasivos + impuestos corrientes -> fuente SIIS
                        }] 
  
 # Exposicion empresarial
  'rankings':[{'nombre_ranking':str,
               'alcance_geografico':str,  # local, nacional, inernacional
               'año':date,
               }...{N}]
 
 # Capital relacional
 'capital_relacional' : {
                        'socios':[{}],

                        'clientes':[{}],

                        'proveedores':[{}]
                      },
 
 # Generacion de activos de conocimiento y tecnologico-> 

    # activos cientifico                                                      
    'derechos_autor':[{'tipo_de_publicación':str,
                       'titulo':str,
                       'año':date,
                       'url':str           # o identificador
                       }] 

    # activos  tecnologico
    # -> ver: https://repositorioacademico.upc.edu.pe/bitstream/handle/10757/660023/10.19083reporte660023.pdf?sequence=7
                                 # -> https://www.wipo.int/edocs/pubdocs/es/patents/434/wipo_pub_l434_11.pdf
                    
    # https://www.sic.gov.co/tema/propiedad-Industrial

    'patentes': [{
                'titulo_patente':str,
                'nro_patente':int,
                'titular':{'nombre':str,
                            'institucion':str
                            },
                'fecha':date,
                'pais':str,
                'autores':[{'nombre':str,
                                        'institucion':str
                           }, ... , 
                           {N}
                          ]
               }]           

    'secretos_industriales':[{'secreto_industrial':str,
                            'producto_proceso_comercializado':str,
                            'año':date,
                            'autores':[{'nombre':str,
                                        'institucion':str,
                                       }, ... , 
                                       {N}
                                      ],
                            ] 
    
    # Otros
    'registros_marcas_signos':[{'numero_registro_signo_distintivo':str,   # -> https://www.sic.gov.co/marcas
                'nombre_registro':str,
                'nombre_titular':str,
                'año_de_optención':str,
                'mes':str,
                'pais':str,
                'autores':[{'nombre':str,
                                        'institucion':str
                                       }, ... , 
                                       {N}
                                      ],
                          }]
  
 # ods 

}
