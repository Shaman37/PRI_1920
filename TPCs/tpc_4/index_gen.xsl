<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arquivo Sonoro</title>
                    <meta charset="UTF-8"></meta>
                    <style>
                        h1{text-align: center;}
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
                        background-color:#f5f5f5;
                        }
                        div {
                        text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <h1>Arquivo Sonoro</h1>
                    <br/>
                    <table class="tab">
                    <xsl:apply-templates/>
                    </table>
                </body>
            </html>   
        </xsl:result-document>
    </xsl:template>
    
    
    <xsl:template match="doc">
        <tr>
            <td id="{generate-id()}">
        <a href="musicas/doc{count(preceding-sibling::*) + 1}.xml">
            <xsl:value-of select="tit"/>
        </a>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>