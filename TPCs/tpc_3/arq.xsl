<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:functx="http://www.functx.com"
    version="2.0">

    <xsl:function name="functx:substring-before-match" as="xs:string"
        xmlns:functx="http://www.functx.com">
        <xsl:param name="arg" as="xs:string?"/>
        <xsl:param name="regex" as="xs:string"/>
        
        <xsl:sequence select="
            tokenize($arg,$regex)[1]
            "/>
        
    </xsl:function>
    
    <!-- ÍNDICE -->
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <link rel="stylesheet" type="text/css" href="style.css"/>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1>Arquivo de Arqueossítios</h1>
                    <table class="tab">
                        <xsl:apply-templates/>
                    </table>
                </body>
            </html>   
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <tr>
        <td id="{generate-id()}">
            <a href="arqueossitios/{generate-id()}.html">
                <xsl:value-of select="(functx:substring-before-match(IDENTI,'[;/]'))"/>
            </a>
        </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/arqueossitios/{generate-id()}.html">
            <html>
                <link rel="stylesheet" type="text/css" href="../style.css"/>
                <head>
                    <title>Arquivo de Arqueossítios</title>
                    <meta charset="UTF-8"/>
                </head>
                
                <body>
                    <h1>
                        <xsl:value-of select="(functx:substring-before-match(IDENTI,'[;/]'))"/>
                    </h1>
                    <h5>
                        <xsl:value-of select="TIPO/@ASSUNTO"/>
                    </h5>
                    <div>CODADM: <xsl:value-of select="CODADM"/></div>
               
                    <hr width="75%"/>
                    
                    <ul class="navbar">
                        <li class="left"><a href="../index.html#{generate-id()}">Início</a></li>
    
                        <xsl:if test="./following::ARQELEM[1]">
                            
                            <li class="right"><a href="{generate-id(./following::ARQELEM[1])}.html">Seguinte</a></li>
                        </xsl:if>
    
                        <li class="right"><a><xsl:value-of select="count(//ARQELEM)-count(following::ARQELEM)"/>/<xsl:value-of select="count(//ARQELEM)"/></a></li> 
                        
                        <xsl:if test="./preceding::ARQELEM[1]">
                            <li class="right"><a href="{generate-id(./preceding::ARQELEM[1])}.html">Anterior</a></li>
                        </xsl:if>
                        
                    </ul>
                    
                    <hr width="50%"/>
                    <h3>Coordenadas Geográficas</h3>
                    <table class="tab">
                        <xsl:apply-templates select="LATITU | LONGIT | ALTITU"/>
                    </table>
                    
                    <hr width="50%"/>
                    <h3>Localização e Acesso</h3>
                    <table class="tab">
                        <xsl:apply-templates select="CONCEL | FREGUE | LUGAR | QUADRO | ACESSO"/>
                    </table>
                    
                    <hr width="50%"/>
                    <h3>Informações Arqueológicas</h3>
                    <table class="tab">
                        <xsl:apply-templates select="CRONO | DESCRI | DEPOSI | INTERE"/>
                        <xsl:apply-templates select="DESARQ"/>
                        <xsl:apply-templates select="INTERP"/>
                        <xsl:apply-templates select="TRAARQ"/>
                    </table>
                    
                    <hr width="50%"></hr>
                    <h3>Bibliografia</h3>
                    <table class="tab">
                        <xsl:apply-templates select="BIBLIO"/>
                    </table>
                    
                    <xsl:apply-templates select="IMAGEM"/>
                    
                    <hr width="50%"></hr>
                    <h3>Autoria</h3>
                    <table class="tab">
                        <xsl:apply-templates select="AUTOR | DATA"/>
                    </table>
                    
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <!-- Coordenadas Geogŕaficas do Arqueossítio -->
    
    <xsl:template match="LONGIT">
        <tr><th>Longitude:</th><td><xsl:value-of select="."/>°</td></tr>
    </xsl:template>
    
    <xsl:template match="LATITU">
        <tr><th>Latitude:</th><td><xsl:value-of select="."/>°</td></tr>
    </xsl:template>
    
    <xsl:template match="ALTITU">
        <tr><th>Altitude:</th><td><xsl:value-of select="."/></td></tr>
    </xsl:template>
    
    
    <!-- Localização e Acesso do Arqueossítio -->
    
    <xsl:template match="LUGAR">
        <tr><th>Lugar:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="FREGUE">
        <tr><th>Freguesia:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="CONCEL">
        <tr><th>Concelho:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <tr><th>Quadro:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
  
    <xsl:template match="ACESSO">
        <tr><th>Acesso:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <!-- Descrição do Arqueossítio -->
    
    <xsl:template match="CRONO">
        <tr><th>Cronologia:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <tr><th>Descrição:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
        <tr><th>Depósito:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="INTERE">
        <tr><th>Interesse:</th><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <tr><th colspan="2">Descrição Arqueológica</th></tr>
        <tr><td colspan="2"><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="INTERP">
        <tr><th colspan="2">Interpretação Arqueológica</th></tr>
        <tr><td colspan="2"><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="TRAARQ">
        <tr><th colspan="2">Trabalhos Arqueológicos</th></tr>
        <tr><td colspan="2"><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <!-- Informações sobre Autor e Data do relatório atual -->
    
    <xsl:template match="AUTOR">
        <tr><td><xsl:apply-templates/></td></tr>
    </xsl:template>
    
    <xsl:template match="DATA">
        <tr><td><xsl:apply-templates/></td></tr>
    </xsl:template>
   
    <!-- Imagem referente ao Arqueossítio -->
    
    <xsl:template match="IMAGEM">
        <img src="{./@NOME}"/>
    </xsl:template>
    
    <!-- Bibliografia -->
    
    <xsl:template match="BIBLIO">
        <tr><td><xsl:value-of select="."/></td></tr>
    </xsl:template>
    
    <!-- [LIGA] - hiperligações -->
    
    <xsl:template match="LIGA">
        <a target="blank" href="https://www.google.com/search?q={.}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <!-- Remover conteúdo referente aos elementos abaixo correspondidos -->
    <xsl:template match="IDENTI">
        
    </xsl:template>
    
    <xsl:template match="CODADM">
        
    </xsl:template>
</xsl:stylesheet>