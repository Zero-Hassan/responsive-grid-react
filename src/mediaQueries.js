
export const MEDIA = {
    XSMALL: "(max-width:399px)",
    SMALL:  "(max-width:599px) and (min-width:400px)",
    MEDIUM: "(max-width:1007px) and (min-width:600px)",
    LARGE:  "(min-width:1008px) and (max-width: 1279px)",
    XLARGE: "(min-width:1280px)"
}

export const MARGINS={
    XSMALL: 8,
    SMALL:  8,
    MEDIUM: 16,
    LARGE:  16,
    XLARGE: 16
}

export const Gutters={
    XSMALL: 8,
    SMALL:  8,
    MEDIUM: 16,
    LARGE:  16,
    XLARGE: 16
}

/**
 *
 *
 *   XSMALL  "(max-width:399px)"	0-399px	8px	8px
     SMALL	 "(max-width:599px) and (min-width:400px)" 400px - 599px	16px	8px
     MEDIUM	 "(max-width:1007px) and (min-width:600px) " 600px - 1007px	16px	16px
     LARGE   "(min-width:1008px)" 1008px+	16px	16px
     XLARGE  "(min-width:1280)" 1280px+	16px	16px
 *
 *
 *
 */