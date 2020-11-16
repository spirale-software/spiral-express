import org.junit.jupiter.api.Test;
import org.springframework.util.ResourceUtils;

import java.io.File;

public class TestFile {

    @Test
    void test() throws Exception {
        File file = ResourceUtils.getFile("classpath:templates/envoi.ftl");
        System.out.println(file.getAbsolutePath());
        System.out.println(file.getParentFile().getAbsolutePath()
        );
    }

    @Test
    void classLoaderTest() throws Exception {

    }
}
