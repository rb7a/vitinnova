import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const PrivacyPolicy = ({ pageContext: { locale }, data }) => {
    console.log(data)
    const  privacyJson = data.privacyPolicy.childPrivacyPolicyJson ? data.privacyPolicy.childPrivacyPolicyJson : ''
    return (
        privacyJson ? <Layout path='/policy' locale={locale} data={data} >
           
            <section style={{padding: "15px 80px",fontFamily: 'Nunito',position: 'relative',border: '1px solid #ededed',zIndex: '8',position: 'relative', padding: '25px 74px',textAlign: 'left'}}>
            <h1 className="page-title "  style={{fontSize: '20px',color: '#4d4d4d', textDecoration: 'uppercase', fontWeight: 400, letterSpacing: '2px'}}>{privacyJson.title}</h1>
            </section>
            <div style={{ margin: '20px auto',boxSizing: 'border-box',fontFamily: 'Nunito',fontWeight: '400' }}>
                <div id="text-block-3"  style={{ marginBottom: '0px', textAlign: 'left',padding: '15px 80px' }}>
                    <p>{privacyJson.p1}</p>
                    <p>{privacyJson.p2}</p>
                    <p><strong>{privacyJson.p3}</strong></p>
                    <p><span style={{ textDecoration: "underline" }}><em>{privacyJson.span1}</em></span><br />
                        {privacyJson.p4}</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span2}</span></em><br />
                       {privacyJson.p5}</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span3}</span></em><br />
                      {privacyJson.p6}</p>
                    <p>{privacyJson.p7}</p>
                    <p><strong>{privacyJson.p8}</strong><br />
                    {privacyJson.p9}<br />
                    {privacyJson.p10}<br />
                    {privacyJson.p11}</p>
                    <p>{privacyJson.p12}<a href="https://help.disqus.com/terms-and-policies/disqus-privacy-policy">{privacyJson.a1}</a>{privacyJson.hash}<a href="https://disqus.com/data-sharing-settings/">{privacyJson.a2}</a>.</p>
                    <p><strong>{privacyJson.p13}</strong><br />
                       {privacyJson.p14}<br />
                       {privacyJson.p15}<br />
                       {privacyJson.p16}<br />
                        <em><span style={{ textDecoration: "underline" }}>{privacyJson.span6}</span></em><br />
                    {privacyJson.p17}<br />
                        {privacyJson.p18}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://www.addthis.com/privacy/privacy-policy">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.p20}</span></em><br />
                    {privacyJson.p21}<br />
                    {privacyJson.p19}</p>
                    <p>>{privacyJson.p12}<a href="https://twitter.com/it/privacy">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span5}</span></em><br />
                    {privacyJson.p21}<br />
                        {privacyJson.p19}</p>
                    <p>>{privacyJson.p12}<a href="https://www.facebook.com/privacy/explanation">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span6}</span></em><br />
                       {privacyJson.p22}<br />
                        {privacyJson.p19}</p>
                    <p>>{privacyJson.p12}<a href="https://policies.google.com/privacy?hl=policies">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span7}</span></em><br />
                       {privacyJson.p23}<br />
                        {privacyJson.p19}</p>
                    <p>>{privacyJson.p12}<a href="https://www.linkedin.com/legal/privacy-policy">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span8}</span></em><br />
                    {privacyJson.span24}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policy.pinterest.com/en/privacy-policy">{privacyJson.a1}</a>.</p>
                    <p><strong>{privacyJson.p25}</strong><br />
                        {privacyJson.p26}<br />
                       {privacyJson.p27}<br />
                       {privacyJson.p28}</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span9}</span></em><br />
                        {privacyJson.p29}<br />
                       {privacyJson.p30}<br />
                       {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policies.google.com/technologies/ads?hl=it">{privacyJson.a1}</a> – <a href="https://adssettings.google.com/anonymous?sig=ACi0TCg-_-Oz0xwRh4t6w11Mf2k-a7FyJZHXNzcL5NU1HkHMR8WogBKQfq0pbFpH5wVNUIrGKvLPZu4DzOH_grVtpWli3KVzSppPBIrvjDWyGiam3QrmlOw&amp;hl=it">Opt Out</a>.</p>
                    <p><strong> {privacyJson.p31}</strong><br />
                    {privacyJson.p32}</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span10}</span></em><br />
                    {privacyJson.p33}<br />
                    {privacyJson.p34}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policies.google.com/privacy?hl=it">{privacyJson.a1}</a>{privacyJson.hash}<a href="https://tools.google.com/dlpage/gaoptout?hl=it">{privacyJson.a2}</a></p>
                    <p><strong> {privacyJson.p35}</strong><br />
                       {privacyJson.p36}<br />
                        {privacyJson.p37}</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span11}</span></em><br />
                        {privacyJson.p38}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policies.google.com/privacy?hl=it&amp;gl=it">{privacyJson.a1}</a>.</p>
                    <p><span style={{ textDecoration: "underline" }}><em>{privacyJson.span12}</em></span><br />
                    {privacyJson.p39}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://vimeo.com/privacy">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span13}</span></em><br />
                    {privacyJson.p40}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://help.instagram.com/155833707900388">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span14}</span></em><br />
                    {privacyJson.p41}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policies.google.com/privacy?hl=policies&amp;gl=it">{privacyJson.a1}</a>.</p>
                    <p><em><span style={{ textDecoration: "underline" }}>{privacyJson.span15}</span></em><br />
                       {privacyJson.p42}<br />
                        {privacyJson.p19}</p>
                    <p>{privacyJson.p12}<a href="https://policies.google.com/privacy?hl=it&amp;gl=it">{privacyJson.a1}</a>.</p>
                    <p><strong>{privacyJson.p43}</strong><br />
                        {privacyJson.p44}<a href="https://support.google.com/chrome/answer/95647?hl=it&amp;p=cpn_cookies">{privacyJson.a3}</a>, <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie">{privacyJson.a4}</a>, <a href="https://support.apple.com/kb/PH21411?locale=it_IT">{privacyJson.a5}</a> {privacyJson.a6} <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies">{privacyJson.a7}</a>.</p>
                    <p>{privacyJson.p45}</p>
                    <p>{privacyJson.p46}<a href="http://www.youronlinechoices.eu/">{privacyJson.a8}</a> {privacyJson.a9} <a href="https://www.networkadvertising.org/understanding-digital-advertising">{privacyJson.a10}</a> {privacyJson.a11} <a href="https://www.aboutads.info/consumers/">{privacyJson.a12}</a> {privacyJson.a13} <a href="https://youradchoices.ca/understanding-online-advertising/">{privacyJson.a14}</a> {privacyJson.a15}, <a href="http://www.ddai.info/optout">{privacyJson.a16}</a> {privacyJson.p47}</p>
                    <p><strong>{privacyJson.p48}</strong></p>
                    <p>{privacyJson.p49}</p>
                    <p>{privacyJson.p450}</p>
                    <p>{privacyJson.p51}</p>
                    <p>{privacyJson.p52}</p>
                    <p><strong>{privacyJson.p53}</strong><br />
                    {privacyJson.p54}<br />
                    {privacyJson.p55}</p>
                    <p><strong> {privacyJson.p56}</strong><br />
                        {privacyJson.p57}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span16}</span><br />
                    {privacyJson.p58}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span17}</span><br />
                       {privacyJson.p59}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span18}</span><br />
                    {privacyJson.p60}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span19}</span><br />
                    {privacyJson.p61}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span20}</span><br />
                    {privacyJson.p62}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span21}</span><br />
                    {privacyJson.p63}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span22}</span><br />
                    {privacyJson.p64}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span23}</span><br />
                    {privacyJson.p65}</p>
                    <p><span style={{ textDecoration: "underline" }}>{privacyJson.span24}</span><br />
                    {privacyJson.p66}</p>
                    <p> {privacyJson.p67}</p>

                    <div className="clearboth"></div>
                </div>
            </div>
        </Layout> : ''
    )
}

export const query = graphql`
  query PrivacyPolicy($locale: String) {
    
    privacyPolicy: file(name: { eq: $locale }, relativeDirectory: { eq: "privacyPolicy" }) {
        childPrivacyPolicyJson {
            title,
            p1
            p2
            p3
            p4
            p5
            p6
            p7
            p8
            p9
            p10
            p11
            p12
            p13
            p14
            p15
            p16
            p17
            p18
            p19
            span1
            p20
            p21
            p22
            p23
            p24
            span2
            p25
            span3
            p26
            p27
            p28
            p29
            p30
            span4
            p31
            p32
            p33
            p34
            span5
            p35
            p36
            p37,
            span11,
            p38,
            span12,
            p39,
            span13,
            p40,
            span14,
            p41,
            span15,
            p42,
            p43,
            p44,
            a3,
            a4,
            a5,
            a6,
            a7,
            p45,
            p46,
            a8,
            a9,
            a10,
            a11,
            a12,
            a13,
            a14,
            a15,
            a16,
            p47,
            p48,
            p49,
            p50,
            p51,
            p52,
            p53,
            p54,
            p55,
            p56,
            p57,
            span16,
            p58,
            span17,
            p59,
            span18,
            p60,
            span19,
            p61,
            span20,
            p62,
            span21,
            p63,
            span22,
            p64,
            span23,
            p65,
            span24,
            p66,
            p67

        }
    }
  }
`

export default PrivacyPolicy