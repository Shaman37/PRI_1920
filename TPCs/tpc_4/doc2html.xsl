<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
   
    <xsl:param name="current"/>
    
    <xsl:template match="doc">
        <html>
            <head>
                <title>Arquivo sonoro EVO</title>
                <meta charset="UTF-8"></meta>
                <style>
                    h1,h3 {
                        text-align: center;
                    }
                    .tab {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    .tab th {
                    
                        padding: 8px;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .tab td {
                    
                        padding: 8px;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .tab tr:hover {
                        background-color: #f5f5f5;
                    }
                </style>
            </head>
            <body>
                <h3>Arquivo Sonoro de Ernesto Veiga de Oliveira</h3>
                
                <h1><xsl:value-of select="tit"/></h1>
                <table class="tab">
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
            </body>    
        </html>
    </xsl:template>    
</xsl:stylesheet>