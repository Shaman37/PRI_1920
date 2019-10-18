<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

    <xsl:output method="xhtml" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <!--  <xsl:result-document href="pr.html"> -->
        <html>
            <head>
                <title>TPC 3</title>
                <meta charset="UTF-8"/>
                <style>
                    img {
                        border-radius: 50%;
                    }</style>
            </head>
            <body>
                <h1 align="center">TPC 3</h1>

                <xsl:apply-templates/>

            </body>
        </html>
        <!-- </xsl:result-document> -->

    </xsl:template>

    <!-- 'Meta' tag template, contaning Supervisor and Project's Dates information -->
    <xsl:template match="meta">
        <h4 align="center">
            <xsl:value-of select="keyname"/>
        </h4>
        <hr width="80%"/>
        <table align="center" width="50%">
            <tr>
                <th align="right">Supervisor: </th>
                <td align="left">
                    <a href="{supervisor/homepage}">
                        <xsl:value-of select="supervisor/name"/>
                    </a>
                </td>
                <th align="right">Email:</th>
                <td align="left">
                    <a href="mailto:{supervisor/email}">
                        <xsl:value-of select="supervisor/email"/>
                    </a>
                </td>
            </tr>
            <tr>
                <th align="right">Begin Date: </th>
                <td align="left">
                    <xsl:value-of select="bdate"/>
                </td>
                <th align="right">End Date: </th>
                <td align="left">
                    <xsl:value-of select="edate"/>
                </td>
            </tr>
        </table>
        <hr width="65%"/>
    </xsl:template>

    <!-- 'Workteam' tag template, containing information about the Project's team members -->
    <xsl:template match="workteam">
        <h2 align="center">Equipa</h2>
        <xsl:apply-templates/>
    </xsl:template>
    
    <!-- Member tag -->
    <xsl:template match="member">
        <table align="center" width="50%">
            <tbody>
                <tr>
                    <td rowspan="4" width="60%" align="center">
                        <img src="{photo/@path}" width="25%"/>
                    </td>
                    <th align="right" colspan="2">Student ID:</th>
                    <td align="center">
                        <xsl:value-of select="identifier"/>
                    </td>
                </tr>
                <tr>
                    <th align="right" colspan="2">Nome:</th>
                    <td align="center">
                        <xsl:value-of select="name"/>
                    </td>
                </tr>
                <tr>
                    <th align="right" colspan="2">Email:</th>
                    <td align="center">
                        <a href="mailto:{email}">
                            <xsl:value-of select="email"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <th align="right" colspan="2">Github:</th>
                    <td align="center">
                        <a href="https://github.com/Shaman37">
                            https://github.com/Shaman37
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </xsl:template>
    
    <!-- 'Abstract' tag template, containing information about the Project itself-->
    <xsl:template match="abstract">
        <hr width="50%"/>
        <h2 align="center">
            <xsl:value-of select="../meta/title"/>
        </h2>
        <h4 align="center">
            <xsl:value-of select="../meta/subtitle"/>
        </h4>
        <br/>
        <xsl:apply-templates/>
        <hr width="40%"/>
    </xsl:template>

    <!-- Paragraph tag -->
    <xsl:template match="p">
        <p align="center">
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <!-- Italic tag -->
    <xsl:template match="i">
        <i>
            <xsl:apply-templates/>
        </i>
    </xsl:template>

    <!-- Bold tag -->
    <xsl:template match="b">
        <b>
            <xsl:apply-templates/>
        </b>
    </xsl:template>

    <!-- Underline tag -->
    <xsl:template match="u">
        <u>
            <xsl:apply-templates/>
        </u>
    </xsl:template>

    <!-- 'Deliverables' tag template, containing links to the Project's resources -->
    <xsl:template match="deliverables">
        <h2 align="center">Deliverables</h2>
        <ul>
            <xsl:apply-templates/>
        </ul>
    </xsl:template>
    
    <!-- Deliverable tag -->
    <xsl:template match="deliverable">
        <li>
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
</xsl:stylesheet>
