import React from 'react'
import CarouselSlider from "react-carousel-slider";
import { BrowserRouter as Router,  Link } from "react-router-dom";

let data = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-lR9am6G4A8s3dUzOO4r8_WsPPvtpTOiRKw&usqp=CAU",
        des1: "Sachin 2011 WC",
      
      color:"red"
    },
    {
      imgSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUVFRUVFRUYFxUVFRUXFRUWFxUVFRUYHSggGBonHRcVITEiJSorLi4uFx8zODMvNygtLysBCgoKDg0OGxAQGysfHx0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEIQAAIBAgQEAwUGAwcCBwEAAAECEQADBBIhMQVBUWETInEGMoGRoUJSYrHB8BQj0QckM0Ny4fEWojREU4KSwtIV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREAAgICAgEEAgMAAAAAAAAAAAECEQMhEjFBBBNRYTJxItHw/9oADAMBAAIRAxEAPwDzVZqTGnFJjQUQpxU1FRagCJNVkU80xagCNQNWE1WaAIxVqUrazV6W6QA/h1B0rWGGMUFet0gBMtMVqyKRFAAsa0ba2psDgHvPltiY1JJhVHVm5Cuq4dwzDWvfU4h/xE27QPZVOZvVjH4aUpJDSOOvLSsivT8M9yMttLSLuQtmyg+eXM3x1qTezzXNXsKwMw3hgHuQVAY/DapU0wqjza6NKDYV3+O9jIMrmUfdLDT0MMY9fnWV/wBLAiczKehgxrHTX6Vqosm0c1YqV+icdgGs3CjjUQQeRB2I/fKh2E0h2BEUXhjVDip26QD4kUOtFusihsutABlltKHvippSuJQAKtF2zpQ9WpTAqvCoLV9xapFFgFW20oe6KsQUri0gB6apU1UBtCoE1cy1WVpWBHPSL1LLQWKvkEgcvz6UwJ3bkVVcxI0A3qi2JO+p58u81AjXSgAnxSNyNfkNufzqxWmtD2f4EcQw3Cz5jrG/7+VdYfYW0B5WdT10YeuU6/UVm8sU6NY4ZSVo46ylaWDw+utaK+z9y00EZhyZdQfhuKvXCxRyTI4tdllvCgrWBxTD5TXW4a2ayuO4UkSBSTBnLZKssYUuwUbn6dTUiK2eAWt25nyj0Alv0+VVJ0rJCbdkW0Fu37o1J5sfvE9fyozBYfUHYSBJ2mq7mVAzNoPz12/fSt3h95GssbSBz4TG6kyuQGUvIu+deemkeprNLltjd+DUwmCGHb+ePdLJctz51JXNbvIdinfltXR8e9sbGCt+E9tvEKAqi6qdNGNxtweup6iuRweGGPw2WyQMTbzNbbQ+LlILWnY/bGhB21HIitbgmGt4/DrZxCgPbMWydGtudGta6hDEgbiCPsidLS6FXyeb8a9r8RdY5AEU8lBHp5zqfpWXYxdwtmbODIlpJUCRmzTqN95rpeOYdbbNaKKhE+X7QYHcn+tc7dxrW3UqQcmkD3WBMsOpB2/SsvccjRJI1sdhzdQ2XtzeWfBZVGclTDWmj3gYOu4IG4OnKcq7TAXWs43C3LBA8RVu280ZQYYG22mg035Z94FF/wBo/s+kDiGGWLN4xeSINi9MMGHIE6evqK1i7Iejzh11pAVbk1p2SmIadKFbeiWqpFoAVs1bcOlRy0rh0pgURU0p0FKKAHvbVQoq5zUEWhATQUrx0p6hcNICgClVgSnpgb5tChr4AqbK8aUK9t20ikBTfxMDvWdcMmes+tWY1GVoNVgEjTlyqgGA/e1WWm1g7c+2tVR2+NWZp0Pw/pQB6P7D422qEDWTM9NoAn0rpsRjbcSW0715f7LYwq4WRDadY7iOZrvBgTc1B90zH5Vx5FUjvxO4AfFeNYgEG3by2594iSfhyq3iGFutFy0ocMozKCAysJkwSJB02opuGXnKhjCqwaFjWDMMx1I7CPU71ocQuJaUMSFmF1/P1qeddFcFJUzkxxUocrqysOTAg/WrLnFkYb0fi+PYfEMuGVfFI/zANEPPzdPpUW4CkbVsmcs48HV2clxG6s6UZw1A6BSWghtjBJzaD6D5UZjvZvmKt4KiW1ILAlJJ+PvEdenwPWnk/EmHdmfcJYurnKEIk6GN9urE/vpo+zvE3t3EuWlKqreV9xmJCw3VW909Z02ise7fbFX8i6K0l408oIn4mB9K2TdQMqKV8OIyyIBUzB+vyrLJmcWki441Vs7a/bWx4eMw65cPcfNcCjzYe9z9VmY7FhoCK1OPWkZDjbEBgv8AeUB0YESH7A6HNy0O4Nc77J8ZVVa3eGaxdBS4o18o924O4EbfoKu4fcu4DE+CxFy0R/Jbdb1l/wDLPKDOnRgeRmrUlJf7TM2mnRT7SYcY2x/EWvNetqPFje7bBjxco3ZfdYf7V5njlAPIkjpEV6Lj54diku2SThMQS9smT4Tn37T9o0IO4jcrNZntN7Hq97+Isn+73RmKSJtONXtg7Qdwdok1pJVt+CV3S8mXgMV5bSxpkZAxE5QGGQntBg13fsjj7dwXcPiNVuKExCHbbKt4d4gE/hBrzDGXcjqDqgmQuxViPdn/AEyJ/WuutH+bau2TvlGskOjaa9ef/NZKVNfZo1ao5X2r4A+CxL2H1ymUb76H3W/Q9waxS1ey+1HCf4/AmBOJwYzJza5Z5oTzIiPVQftV40Vrp+zAg1MDSamikMcmomlFRNADzSmokUgKAHpUxpA0wFNMaeoEUgJTTU2WlQB02FxC6g1fbvIDyrDt3QR3qDE0qAF47eDXnjQCB6x+zWcDFX44y00LVgWhzzmKRNEcItB7yIRILe7MZoBIWe8R8a6HiHCriW0e8lkW7hhMgQMrGTHlE/Z1BJqXJJ0aQxOSsyOCYnJczRXe4XiEQZgGIribnCWW2l5YKMSJBmCN1YcjRtu+SoExFYZIqW0b4pOC4s9Cs8cZYIO1CcW4hbuITdUMp5GCJkVzOAv8if3vWlZyOFDa+ZSRyO0j99KxppmyaeyeF4HdWcRZt3GVUMFQFQLoSAp1Ycxl+tCj2gNdHxPFQuZjdCqGCi2YRA3JUWJHSZjlFefcQxCZ/wCWDl777mtsb5dmGeFbOhHHSeW+nxrGxuKi0qBWVoCNOhOgJPxP51nNiK0Vvm4q3QwNy3A1iTElZ6nvzjWda0cUYKTSoG4fiGtscmucc4hgNck8jvRN5MoU6GVVo+2M2UHMoEDzHQTzFDYnHLcJJABJmBIYdWDdfhyqkJcWYuBgRlIaScpOYCBJ94A6cxWbir2aNtq0az4s2z/KdmHX3NeQg12PCsQuPwv8JdIS4pnDuYIt3D/lk/8ApvHwOnSvP8O7FtWVfvGCMw5g684rXwN4ICVXO2kQ0QJEgzv9I35VFqGu7Kac99Ha8Jusy3MHjAQwyFjzRyJt3lnnJhj11+0aMs4EpbNi+JtnyMw1DKNVuAE6MBEjtpIyzR44xKrdZZv2VKtPvNbaM2n2joJHMiec1pYPFi4nhtqQPKebruI/EJ0PfqdOiKRzyl4PK/abhj4fEOjnMDBRxs6H3CPhoRyIon2e4llU2mmBLJ+qj4wfnXWcZwK4m0bUfzLZJsnqT9j/AEMNuh9DXnYzI3MMp+IINGSCkgjJpnqvs/xcqyX1MhPfjnaaA3wjIY5QvQ1yP9pvs8MLiy1sfyb48W0RsJ95R6E/Iij/AGWJULe8otlogndXkOpHQHaup45ghjMDfwwM38GfFt6yShE5f/jI+ApQlehyi1s8UKUxWjWwjhc/hvk+9lbL280RVBq7FRRFRKVeaY0CKMlLJVrCo0AVMtRy1aacLQBSBSir8lRigCrLSq2aVAB1rArAINSxi5V0FAJiWApjjGOhpoAW/qNqArTeg71vmKYFdq4VIZTBBBBG4I1BrveC+09m6hS+tvNqctyQmaNWRgDE6HKRzMHWK8/qSNFROCka4szx9eT0y5wfBm0xs30QlQT/ADSynKJEqx0M8+WtcZ/FddqDsNm5U95COVQo12aTycukaNnGRzo0Y8wWnWNP31rmw1X5yRTcEZrI0dZw72pyjK3f/ms7i2ItXmzIAHJ5c57fM1zritThOFYDxCpMmF9OZH5UlBR2geRtUyF7DEVHD3ijAxI2I6gxI+g+IHSt5LBcbVk43DZTVpmbNS1btMQxWVZYBjXoZHJhzp7nCSNFYSRmTowG+/7FZWCv5dDOUkbbgjZh3roPHe4gUPBQ5iIEMNvEUxI7gdZjrLi30OMqMAYplbzKCQdjIg/Aij29ob5EBso7F5+rGlxnDzqYD9fsuORB61lRT4RfaDk/k3OAcfe1dDO7FTvJnL00P2eRHQ9q79sUpUXEMAkR+FjyPYzpy17zXkq10/sxxXL/ACn1UiIPMc1/p/xT6JZ1mPJzeOkgjS4o676ep1H4umaue9q8CHH8Vb5x4oHU+7c9DpPqK2LOIytkbUMIU/fToe4+o+dDjyNkIBtOI6zO4PrPz9aLFRyN3irJb8NdssDtJzT6zNa/sli2sRefMTdkbtmKk843zETz5U59krrOcpUIPdZiZIOo8o5iaKwVl8IyqyhyAShUkiDuoUiQZI/ZrDJVUjthurOhxRuXAQVVFYEefdgeWUbCOuvavOeM4E2bhU7HVT1E/mK7fFpdcBr1w215pbjNH4nMj5A+tZ+N4bbuKys+ZVBNu5s6k7huRGgnr2gVGOfFjy4+S/RwxekGpEVGus4qLRTMKhUpoAZVqQWpKalQAxWqXFEE1TcoAoJpUitKgBgKgRVhFRimA1Qy1M0hQAFdtEcjVNaTLO9CXLYBpgPh3g6V1PDQrjWNv3yrnFCdCPif1rTwOJC7VGTG2tG2LIk9h/EOAaFkX5VktgWU6iu04ZxC24A8RZ6EwfrRWKww5jeuf3JR1I6HihLaPPsPhc11VbRdz1gb/wBPjXWXsakACAAAAOQA2FXWcAhuaLEKemu1EHhS9K1UuSOaceLoDsY5BWVxfEK1bV7hQ6VgcWweWmiGZeejsHjcka7ag81P9OorOC1KtCTsVQXFB05ERr4ZPOOds/SaCx/DC8lVIuj3kA97uvWsvhfEmtEa6fl19R2rveG49bgEETG3KOZXtp8IqlTIdo87y1q+z+BW7dCuxUROhgz0B5V0fHOBi9Ny2ALnMcrnr0bvz59a4+8rIeasp1GxHUGonF1SNMclezvb+EQKLfisSIKtHmBHOZ+f7iWIQKvl8x0MtG/WOXWuK4bxFs2pPrXQrdzAGTFccuS02d0Ixe0b2HuMUh7kdCN5POgOKcPABfxmNxVPMZdBMADbbrWVfxJEQdjr/tW1YNkoMwzHownfc61HRo1aMXhOJF1ymKZ8pHlCkL136c9KMxFrDpmFl2JytKMcwYZT23oe2llcSrFA1rMjMp2IDjOvpH50T/aLwsYTF3BaGVGAe2BsFddQOwM1v7d7Rze9Wmee3Hqhrhq+4kUM4roOVk0v1cr0EadbkUAaCvVqmg7d2avQ0AXzVTCrAaZhQAOaVWGlQAOTUc1EFKqy0AQmkDTmpotMCABJAAJJMADmTRCYGSQxgoGLGDC5esa76VrcJ4BiHKstvKrKbnjP5baqp94udABv8q1OMY3BW5W2Hvu4AuHMbVh3EywVQLr68gUXWdTrWsYOrMpuXSOHfDFjCnMTsBJJ7ADXtSFkrGckTsIIn51upxK5bECwV82dYa7adTyKnxM+3WaEZ7d1na/buszA5X8UZlaZzO2RvEHaAe9FeRqXyCC/GkVfh+O3LbDw2OUHVTqp6iOVW3fZ5jbNy3cDL90yxHUh0BWN98p7URhPZDG5MxwxFolVLsRbBLGFjPBYT90HlQ/5KmOM13Fkf+pLs51cZp9zJ5AJ3kmTO1bPCvaVr9y3bW2Axk3DMgKoJ8vfbfaazbPBMALlwNjSy21UhUtOHuvJDWlJJURprMGeUGMXD8SKXJsjwp0n3mC9JYb943AqHjS6L5N9s9NaK5/jtuues8exRcBLhaTABVNe50orG+0E+S4oJAhnQnLmk6AHl8az4PsfJAGSkVqwQdRt1p2GlMRStH4DFNbIIned4+I70Eq0VbWgDuuFceV1ytGbkdvgRyO/6GrOO8Ms3UJfy3IOR1EydPI4PvDvy6xXEWlJMLv+XrW+odVBfzKIBKzKR1BJ8s9O9Z5J1+zfDg5v4RXheCKlsBoLbz/SiHgeUQIou0+eNQehmqOLYUIub8z+5rkTt7O5x46B7Vv0HfSjcHiLdo+8STuDrHoJ0rmFx7NoNO/aiLSnNkmHMHMdoO8d4jWtODMJZEjrMTjBfypuVIgncAyI9NfpW/7dcP8AHweFvx5hb8Nz/p2+uauVwaQFYAAoctwDvs3z+jCu4v8AFAeGXxH+E6z2FyCD8yflW8FSOOcuUrPEuIWYJFZdytji16WJrFdx1rRElZqBqbVA0wErRRdm7QRqVpoNAGqjVJjQ1p5q8UgFFKpxSoApzVUxpiaQFAERRWDw7OwVQSeg9QB8yQKqCVJ3ZF8uYBjGYSAdPdB+P1qoifRq4rHs4GGt3P5NvV2klXYe856oDog6a7saqs4glhawytmY5QQJvXD0BAkDcwKys50tqCSSJA3ZiYAHXeB3JrormOGBQ2bB/vLCMRfETbB/yLB+z+Jt52/Dt2YuHJ7C14RhsN/468z3dzhcOVZlPS9fMqp6hZPeqxxtA0Yfh+GA5C4j4p/XNdJE+iisKyihc9zNr7qCAW6ksZhe8TReBfEX3Wxh1guYCW5k9SzE7DmSYquXwLk3+KC+JYu9cEHD2rLHZ7dpMMx6qcuQOvZp7UavtFibmFOHvWPE/hkyi5k89q2ym3JeCQIbLqNjvzpn4bg8Ef7w38ZiBvZtkJh7bdL16CbhHRR2NAXcc964TZt27LFWXLYTwlysdQ4U6qec6GivINa3/QL/AANl1zNeCmQB5GLDrm9PU7UDxGzbI/l5jcXcmAH31Cxvt/SupxN3h9tMhw2IW68Zn8W26WjIk21UxcG+jQe4OtJuEcMlScdeMElsuGKyoBIUSxgkgCdd9hvScUwit3do4TxIIIEEQdNKue8rjVQDHIRPet/2j4nYu5VtYbw7FtYRZm7qSWdn11JMxqBJ6k0GOF24SEYh1zBsxGuXNk92Np1/Caiq0amNZvsrCJj7v6AVqq0jY6aEHQgjTUVM4BAfKuRgD5iWcrEz5duR+VZt63cS4Q0g7kzII5GedQ0ikaaLV1s8tSegEmn4fgrtz7OUdTP5V0WB4b4Z1HLp9a58mVROjFgctvSBuC4dWTOhmDD8mVjsGXcCt03Ao696yL984S6L6EagJeT7Ny2dywG5Aj59qhjuIAjMo0YSAdSB0nrXPJXs64uv4sg+O8PQMDlZmAO7IxkZey7R0IobFY17xm60Ks6KAY9eY9axr1/WQdQf2KGN4qZBIPWto41dsyy+obXFeDev8IW6s4d5IH+GSBm/0nr2PzpuDYmD4F8FSDCkiGtncDXlJ+p5GsjD4+CD7rAzmX3T6ry9R8q27uON8JnVWcEQ8iQs8m3ieo09at6Obs6bg2IUuFbVoyOqwwcEGI11IGschEwVrR9osdhrLeGLrLbKr4iqfEe4QPd3hoOmuUDUV59jONeF5LMBhobgkNBEFBB90yfmd5rJfFsR5iT6kmBMwO2+nepUJN3YScekb/EOL2s5NiyiCdGZVa56zEL6DbrWfe4s7aMQR0IBHyIoDD2mc6bDdjoq9yeVGri8NaUgWzfucmJyWVPXLvc9NJ3nlXRFqOkYtWRtKLn+QpHMquSPVkgD40NisFaAlbyqfuFhc/77cx8R8aFxWMe577EjkuyD0QaCqAabnYqoZkO/LruPnVdF2Lh8wOxVvhClh+VCGpKQRYuUejVkA1oYZ9KBhoNKqwaekAMFmrVWp21qRoGRIqnGY5yFVmJW3ItqT5VJ0JVdgYA+Qq9qz8UCzgACScoA6k6VUSZKwrhtzwlN/wC1qln/AFkeZ++UH5kUNh2E5m1A/wC49KlxVxmFtfdtDIO5+23xafkKFdo06fnzqmyWvBpYUXMRdVFGZ3MKOQH6KBrNdNjeKrhLbYXBN52EYnFKIe4edq232EHb+s4GH4ncwtgpahLt8S7j/EW1sEVvs5tzGtZlkzMy2kATlWfxHeOwirUqFSSNBQBBbnsqkFiOsfZHc/I1ficcXAUAKg+yCcs9W+8e5rMtk7T6xAB+VdP7M+zpvkPcJW1/3PHIdB3+XUKU1FcpBHFzkvkA4bgLt85bSM/WICj1JhR8a27/ALOmygN7xBHvMoFxR6wQR8o713OEtpbUJbUKo2A/ep71J7w51yP1cr10dj9EnGm2n9HmT2cKJJa44OmWAvxmayMDxDw4tsTlkqxVUFwQSQVcjvPzHOu14rwK1cuE23W0D72afDnr5RK/lWRhuCoLjEHxNYDQQrRpIB5T+U1tLNBx5WYQ9JNTcW2/szcBZvudNACTJEDWdRHrXQ4HgyLBaWbqxzH4TtRqqEA0HfsKu/igPX8q4p5ZSPQx4Yw+2MtkDt+4/SnxHEAAR20+ooTE4s6/Q1mPcnT1n5zUJGr+x76l5J2Ig86wheKgqI8pyz+X0EfCtLiGNgZQdTv2gRVnA72GKNaxCgScy3NcwOgIJGvKtoaVs58m3SMCh3bWtLjtm3auZLTZlgNmkGZ6EcqyZrdO0cjVOmTo6/e8O2ANzqT9rXZR0A/Mt0FCYZZZQev7/Wh8ViS5k6dB0HT5VSQSEpolEAGa5MclHvN/+R3+VQCi3qQC/JTsvdx17VS7kmSZJ3Jp2TaRdisWzwDAVfdRdEX4cz3OtUzTCkTSJbsVMaU06id9uZoETGik8zKj/wCx+Wn/ALqHqVx5PbYDoP3+dRpoYqIwzUPU7TQaGM1FFKqkfSnpAFAUqeomiwGemfG2rZBW1LgSXZphoMZVGgEn1q4JQPEbYAmNaqLEwBBzPw6k0WeH5US7ddQHY5Ukm4wU+ZoAhV5SSCeQNUGy7KXCnKNzyHaTvUuI31YoFMqltVGkaj3vrVASu4hXuNcdS34ZKjoo01gdoofxSeg7DQCotsI9TUBSEl5NfhFkO4ze6NW79u016Fg8cIAEAAaDaBtXnWE0URRiY9hzrmypzOzDJRR6VaxojehOI4sxoa4zB8UI3Jom9xYMIrB42jqU4sO8cnSe1XW7uQDpWKt3pzrUTUAmk1RUXZcjEn1+dNfICnX/AHpw4nT/AGoXHXco13oSBlGJvkiBp39KAxGKAELvQ+IxJmJ3rPe7/wA/0raOM5p5aLLra/nUGuVUGpmNbGFldw61Jag1ODTILC8AnsR8xH602HuBPNqWjySIAP3z1jl315aorIM1UzyZ/YA2FNEyETzOp601KlQQImlSqUcz/ufSgBKPlVdx50G371NJ3nsOQ/e5qFMZIUqYU9MYqQNKlQAYj6UqqU6UqkDXBpppRSK0AS8SmARj/MBKgEwN2IEhZ5TUClSy0wMrG4p7h10A0VF0VRyAH60KfrRmMTz5UBJPTUyeQqf/APMya33CfgHmuH4cqolGeNav/hWHvQo7mPpvVlzGgaWlyD727n1bl8KDbU9T1oGEW7yrtmP0HwqaYwcxQmWlHeporkaQuDkaWes9SBzNaYtoUUqz5o1BAiexn9KXH4H7ldhGDxRFdBgcevMT8dK5AgirEuEbGspYrOmGejssRxFAOQidKwMZxQ3DoOwoXPnG3x61nvfncbGYB6dacMVbJy529I6nC8HyrL6sRt0oLFYJRy+VdVGYT1E/OsfidmhSMmmYD4IcjQ9zDsOU+mtamWhcXViszYpwlJr7evqJp1xB7fIU6FaCrNjP5Budu+XzQO+h+nWgWEGnN0zMmeR6dIqx8SW1YAnmYgn1iKCZbKamtsn+uw/3p/E6AD996ibmutMVDtptr3/oKoJq269U0wFSpUqBipUqVADinphT0ATBpU1KgDZD1HPSpVICzUvEpUqAKsVxAIzCwuXUg3DrcPpyUelZRJJncnmf1pUqsBpA5UxY01KkKhqklsnYT8qVKgYZb4XdP2fmRXY8D/s9xl60lxWsBWmMzvOhI1AQ9OtKlWmPsmXRqXP7NbiCb2LtIOyXLn9KCfgnDLX+NxJieYTDXB9SDSpVoyVssGD4Qf8Az98djYM/QVyvFMLhDddLF+4wnysyQpA3JA160qVKT0hrs7Hh/wDhJrPkXXadImKr4hYlaVKvOepHV4OevLBrPxlPSrdGJkmkDT0qsQ1TQUqVJgKKYilSpAJhVRpUqaAalSpUwFSpUqAHFPSpUASpUqVAH//Z",
      des1: "Yuvi 2011 WC",
      color:"pink"
    },
    {
      imgSrc:
        "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-6kgiqcofh5ndnmooo3t498ude5-20191017130359.Medi.jpeg",
      des1: "Dhoni 2007 T20 WC",
    color:"yellow"
    }
  
  ];
  let sliderBoxStyle = {
    height: "250px",
    width: "300px",
    background: "transparent",
    border: "1px solid #e1e4e8"
  };
  
  let itemsStyle = {
    height: "80%",
    padding: "0px",
    background: "transparent",
    border: "1px solid #e1e4e8",
    borderRadius: "2px"
  };
  
  
  let buttonSetting = {
    placeOn: "middle-outside",
    style: {
      left: {
        color: "#929393",
        background: "transparent",
        border: "1px solid #e1e4e8",
        borderRadius: "50%"
      },
      right: {
        color: "#929393",
        background: "transparent",
        border: "1px solid #e1e4e8",
        borderRadius: "50%"
      }
    }
  };
  
  let dotsSetting = {
    placeOn: "top",
    style: {
      dotSize: "5px",
      currDotColor: "rgba(155, 108, 27, 0.5)",
      marginTop: "0px"
    }
  };
  
  let customSlideCpnts = data.map((item, index) => (
    <Link to={"/page" + index} key={index}>
      <img src={item.imgSrc}  alt={item.des1} />
      <p style={{color:item.color}}>{item.des1}</p>
      
    </Link>
  ));


const Slider = () => {
    return (
        <Router>
    <div style={{ width: "400px", margin: "0 auto", position: "relative" }}>
      <CarouselSlider
        slideCpnts={customSlideCpnts}
        manner={{ circular: false }}
        sliderBoxStyle={sliderBoxStyle}
        dotsSetting={dotsSetting}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  </Router>
    )
}

export default Slider