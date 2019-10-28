<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Arquivo sonoro EVO</title>
                <meta charset="UTF-8"></meta>
            </head>
            <body>
                <h3>Arquivo Sonoro de Ernesto Veiga de Oliveira</h3>
                <xsl:apply-templates/>
            </body>    
        </html>
    </xsl:template>
    
    <xsl:template match="doc">
        <h1><xsl:value-of select="tit"/></h1>
        <table>
            <tr>
                <th>Província:</th><td><xsl:value-of select="prov"/></td>
            </tr>
            <tr>
                <th>Local:</th><td><xsl:value-of select="local"/></td>
            </tr>
            <tr>
                <th>Musico:</th><td><xsl:value-of select="musico"/></td>
            </tr>
            <tr>
                <th>Duração:</th><td><xsl:value-of select="duracao"/></td>
            </tr>
        </table>        
    </xsl:template>    
</xsl:stylesheet>